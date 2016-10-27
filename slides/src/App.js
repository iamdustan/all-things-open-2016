/* @flow */
import React, { Component } from 'react';
import './App.css';
/* eslint-disable */
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck,
  Fill, Fit, Heading, Image, Layout, ListItem,
  List, Quote, Spectacle, Slide, Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
/* eslint-enable */
import CodeSlide from 'spectacle-code-slide';

const theme = createTheme({
  primary: '#122b45',
  secondary: 'white',
  tertiary: 'white',
  quartenary: 'white',
});

class App extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={[]} transitionDuration={0} progress="bar">
          <Slide>
            <Heading textColor={'#fff'} fit>React Internals</Heading>
            <Text textColor={'#fff'}>Through the Lens of a Renderer</Text>
          </Slide>
          <Slide align="flex-start flex-start">
            <iframe src="http://localhost:3001" style={{margin: '1em', border: 0, width: '100%', height: '90vh', position: 'absolute', top: 0, left: 0}} />
          </Slide>
          <CodeSlide transition={[]} lang="js"
            code={require('./code/01-base.example.js').default}
            ranges={[
              {loc: [0, 24], title: 'Hello World of React'},
              {loc: [0, 1]},
              {loc: [1, 2]},
              {loc: [3, 6]},
              {loc: [7, 18]},
              {loc: [20, 24]},
              {loc: [0, 24], title: 'Extract Counter'},
            ]}
          />
          <CodeSlide transition={[]} lang="js"
            code={require('./code/02-extracted-base.example.js').default}
            ranges={[
              {loc: [0, 11], title: 'Extract Counter'},
              {loc: [5, 7], title: 'Extract Counter'},
            ]}
          />
          <Slide align="flex-start flex-start">
            <iframe src="http://localhost:3001/composed" style={{margin: '1em', border: 0, width: '100%', height: '90vh', position: 'absolute', top: 0, left: 0}} />
          </Slide>


          <CodeSlide transition={[]} lang="js"
            code={require('./code/03a.example.js').default}
            ranges={[
              {loc: [0, 18], title: 'Extract the Counter'},
              {loc: [0, 1], title: 'Extract the Counter'},
            ]}
          />
          <CodeSlide transition={[]} lang="js"
            code={require('./code/03b.example.js').default}
            ranges={[
              {loc: [0, 1], title: 'Extract the Counter'},
              {loc: [9, 16], title: 'Extract the Counter'},
            ]}
          />
          <CodeSlide transition={[]} lang="js"
            code={require('./code/03c.example.js').default}
            ranges={[
              {loc: [9, 13], title: 'Extract the Counter'},
              {loc: [0, 16], title: 'Extract the Counter'},
            ]}
          />

          <CodeSlide transition={[]} lang="js"
            code={require('./code/02-extracted-base.example.js').default}
            ranges={[
              {loc: [0, 11], title: 'Props'},
              {loc: [5, 7], title: 'Props'},
            ]}
          />
          <CodeSlide transition={[]} lang="js"
            code={require('./code/04-composed-base.example.js').default}
            ranges={[
              {loc: [5, 7], title: 'Props'},
              {loc: [0, 11], title: 'Props'},
            ]}
          />
          <Slide align="flex-start flex-start">
            <iframe src="http://localhost:3001/props" style={{margin: '1em', border: 0, width: '100%', height: '90vh', position: 'absolute', top: 0, left: 0}} />
          </Slide>


          <CodeSlide transition={[]} lang="js"
            code={require('./code/03c.example.js').default}
            ranges={[
              {loc: [1, 2], title: 'Props'},
            ]}
          />
          <CodeSlide transition={[]} lang="js"
            code={require('./code/05-composed-counter.example.js').default}
            ranges={[
              {loc: [1, 4], title: 'Props'},
            ]}
          />

          <CodeSlide transition={[]} lang="js"
            code={require('./code/06-indirection.example.js').default}
            ranges={[
              {loc: [0, 1], title: 'More Renderers'},
              {loc: [0, 1], title: 'Introduce Indirection'},
              {loc: [0, 1], title: '(Don’t do this at home)'},
              {loc: [10, 14], title: 'render() as prop'},
            ]}
          />
          <CodeSlide transition={[]} lang="js"
            code={require('./code/07-dom-counter.example.js').default}
            ranges={[
              {loc: [0, 12], title: 'DOM Counter'},
              {loc: [0, 1], title: 'DOM Counter'},
              {loc: [1, 2], title: 'DOM Counter'},
              {loc: [2, 4], title: 'DOM Counter'},
              {loc: [5, 9], title: 'DOM Counter'},
            ]}
          />
          <Slide align="flex-start flex-start">
            <iframe src="http://localhost:3001/generic" style={{margin: '1em', border: 0, width: '100%', height: '90vh', position: 'absolute', top: 0, left: 0}} />
          </Slide>

          <Slide><Heading textColor={'#fff'}>React Native</Heading></Slide>
          <Slide><Image src={require('./ato-counter-native.gif')} /></Slide>
          <CodeSlide transition={[]} lang="js"
            code={require('./code/08-native-counter.example.js').default}
            ranges={[
              {loc: [0, 18], title: 'Native Counter'},
              {loc: [0, 1], title: 'Native Counter'},
              {loc: [1, 2], title: 'Native Counter'},
              {loc: [2, 4], title: 'Native Counter'},
              {loc: [5, 12], title: 'Native Counter'},
            ]}
          />
          <Slide><Heading textColor={'#fff'}>React Blessed</Heading></Slide>
          <Slide><Image src={require('./ato-counter-blessed.gif')} /></Slide>
          <CodeSlide transition={[]} lang="js"
            code={require('./code/09-blessed-counter.example.js').default}
            ranges={[
              {loc: [0, 18], title: 'Blessed Counter'},
              {loc: [0, 1], title: 'Blessed Counter'},
              {loc: [5, 13], title: 'Blessed Counter'},
            ]}
          />
          {/*
          <CodeSlide transition={[]} lang="js"
            code={require('./code/10-x11-counter.example.js').default}
            ranges={[
              {loc: [0, 18], title: 'React x11'},
              {loc: [5, 13], title: 'React x11'},
            ]}
          />
          */}
          <Slide><Heading textColor={'#fff'}>React Music</Heading></Slide>
          <Slide align="flex-start flex-start">
            <iframe src="http://localhost:3002" style={{margin: '1em', border: 0, width: '100%', height: '90vh', position: 'absolute', top: 0, left: 0}} />
          </Slide>
          <CodeSlide transition={[]} lang="js"
            code={require('./code/11-music.example.js').default}
            ranges={[
              {loc: [0, 180], title: 'React Music'},
              {loc: [0, 180], title: 'aka the Ken Wheeler'},
              {loc: [0, 180], title: 'React Music'},
              {loc: [2, 13], title: 'React Music'},
              {loc: [23, 26], title: 'React Music'},
              {loc: [33, 180], title: 'React Music'},
              {loc: [36, 40], title: 'React Music'},
              {loc: [41, 45], title: 'React Music'},
              {loc: [45, 47], title: 'React Music'},
              {loc: [49, 54], title: 'React Music'},
            ]}
          />

          <Slide><Heading textColor={'#fff'}>React Three.js</Heading></Slide>
          <Slide><Image src={require('./ato-react-3d.gif')} /></Slide>
          <CodeSlide transition={[]} lang="js"
            code={require('./code/12-3d.example.js').default}
            ranges={[
              {loc: [0, 1380], title: 'React Three.js'},
              {loc: [1, 2], title: 'React Three.js'},
              {loc: [269, 270], title: 'React Three.js'},
              {loc: [297, 308], title: 'React Three.js'},
              {loc: [312, 326], title: 'React Three.js'},
              {loc: [326, 330], title: 'React Three.js'},
              {loc: [330, 340], title: 'React Three.js'},
              {loc: [340, 341], title: 'React Three.js'},
            ]}
          />

          <Slide><Heading textColor={'#fff'}>React Aframe</Heading></Slide>
          <Slide align="flex-start flex-start">
            <iframe src="http://localhost:3003" style={{margin: '1em', border: 0, width: '100%', height: '90vh', position: 'absolute', top: 0, left: 0}} />
          </Slide>
          <CodeSlide transition={[]} lang="js"
            code={require('./code/13-aframe.example.js').default}
            ranges={[
              {loc: [0, 1380], title: 'React Aframe'},
              {loc: [4, 5], title: 'React Aframe'},
              {loc: [11, 12], title: 'React Aframe'},
              {loc: [26, 27], title: 'React Aframe'},
              {loc: [27, 30], title: 'React Aframe'},
              {loc: [31, 32], title: 'React Aframe'},
              {loc: [33, 37], title: 'React Aframe'},
              {loc: [38, 41], title: 'React Aframe'},
            ]}
          />
          {/*<Slide><Image src={require('./ato-react-aframe.gif')} /></Slide>*/}
          <CodeSlide transition={[]} lang="js"
            code={require('./code/14-aframe-counter.example.js').default}
            ranges={[
              {loc: [0, 1380], title: 'Aframe Counter'},
              {loc: [2, 5], title: 'Aframe Counter'},
              {loc: [8, 15], title: 'Aframe Counter'},
            ]}
          />

          <Slide>
            <Heading textColor={'#fff'}>Final Demo</Heading>
            <Text textColor={'#fff'}>(I swear!)</Text>
          </Slide>
          <Slide>
            <video width={'100%'} controls>
              <source src={require('./react-hardware.mp4')} type="video/mp4" />
            </video>
          </Slide>
          <CodeSlide transition={[]} lang="js"
            code={require('./code/15-hardware-counter.example.js').default}
            ranges={[
              {loc: [0, 1380], title: 'React Hardware'},
              {loc: [2, 3], title: 'React Hardware'},
              {loc: [6, 16], title: 'React Hardware'},
            ]}
          />

          <Slide>
            <Heading textColor={'#fff'}>That was fun!</Heading>
            <Image src={require('./that-was-fun.gif')} />
          </Slide>

          <Slide>
            <Heading textColor={'#fff'}>Now let’s get boring!</Heading>
            <Image src={require('./lets-get-boring.gif')} />
          </Slide>
          <Slide>
            <Heading textColor={'#fff'}>Reacts Internal Concepts</Heading>
            <Text textColor={'#fff'}>Core | Renderers</Text>
          </Slide>
          <Slide>
            <Heading textColor={'#fff'}>React Core Concepts</Heading>
            <List>
              <ListItem>Virtual DOM</ListItem>
              <ListItem>Reconciliation</ListItem>
              <ListItem>Components</ListItem>
              <ListItem>Instances</ListItem>
              <ListItem>Elements</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading textColor={'#fff'}>React Renderer Concepts</Heading>
            <List>
              <ListItem>Host Environment</ListItem>
              <ListItem>Reconciling to Host</ListItem>
              <ListItem>Prop Diffing</ListItem>
              <ListItem>Event Handling</ListItem>
              <ListItem>Injection</ListItem>
            </List>
          </Slide>

          <CodeSlide transition={[]} lang="js"
            code={require('./renderer/mount.js').default}
            ranges={[
              {loc: [0, 1380], title: 'Let’s Implement A Renderer!'},
              {loc: [0, 1380], title: 'ReactHostMount.js'},
              {loc: [0, 3]},
              {loc: [4, 11]},
              {loc: [12, 14]},
              {loc: [15, 18]},
              {loc: [19, 21]},
              {loc: [22, 26]},

              {loc: [27, 33]},

              {loc: [32, 33]},

              {loc: [53, 58]},
              {loc: [61, 72]},

              {loc: [75, 80]},
              {loc: [84, 85]},
              {loc: [89, 90]},

              {loc: [97, 99]},
              {loc: [106, 120]},
              {loc: [110, 116]},
              {loc: [124, 127]},
            ]}
          />

          <CodeSlide transition={[]} lang="js"
            code={require('./renderer/component.js').default}
            ranges={[
              {loc: [0, 1380], title: 'Let’s Implement A Renderer!'},
              {loc: [0, 1380], title: 'ReactHostComponent.js'},
              {loc: [4, 9]},
              {loc: [10, 11]},
              {loc: [11, 12]},
              {loc: [10, 12]},

              {loc: [28, 30]},
              {loc: [32, 33]},

              {loc: [36, 37]},
              {loc: [42, 43]},
              {loc: [46, 47]},
              {loc: [51, 52]},

              {loc: [54, 55]},
              {loc: [60, 65]},
              {loc: [66, 67]},

              {loc: [74, 80]},
              {loc: [82, 85]},
              {loc: [86, 92]},
              {loc: [99, 100]},
              {loc: [100, 101]},
              {loc: [105, 106]},

              {loc: [108, 110]},
              {loc: [112, 113]},

              {loc: [116, 119]},

              {loc: [120, 121]},
              {loc: [123, 128]},

              {loc: [132, 136]},

              {loc: [151, 152]},
            ]}
          />

          <Slide>
            <Heading textColor={'#fff'}>Resources</Heading>
            <List>
              <ListItem>iamdustan.com/react-renderers/</ListItem>
              <ListItem>github.com/iamdustan/tiny-react-renderer</ListItem>
              <ListItem>React from Scratch<br/>
                youtube.com/watch?v=_MAD4Oly9yg</ListItem>
              <ListItem>What’s Next For React?<br/>
                youtube.com/watch?v=aV1271hd9ew</ListItem>
              <ListItem>facebook.github.io/react/contributing/codebase-overview.html</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading textColor={'#fff'}>Questions?</Heading>
            <List>
							<ListItem>github.com/iamdustan/all-things-open-2016</ListItem>
							<ListItem>—————————</ListItem>
              <ListItem>twitter.com/iamdustan</ListItem>
              <ListItem>#react-internals on Reactiflux.com</ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

export default App;

