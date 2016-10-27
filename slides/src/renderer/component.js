export default `/***
 * The Tiny React Renderer.
 */

/**
 * React Components are the heart and soul of a React renderer. This is the
 * internal side of a consumer’s ReactComponents. At a high level, you will
 * define one or more internal components to map to the public interface of your
 * renderer. Below this we have defined two ReactComponents.
 *
 * * MinimumViableComponent
 * * TinyRendererComponent
 *
 * MinimumViableComponent is an overview of the minimum interface required to be
 * a valid ReactComponent.
 *
 * TinyRendererComponent is the component that is constructed in the Tiny React
 * Renderer.
 */
'use strict';

const ReactMultiChild = require('react/lib/ReactMultiChild');

/**
 * This MinimumViableComponent is the minimal interface to be recognized as a
 * valid React Component with support for rendering children. This is assuming
 * that the default case for a component is to support children.
 *
 * This has a very symmetrical relationship to the userland side of creating a React Component. In addition, there are private methods used by other parts
 * of React Core, such as \`getPublicInstance\` or \`getHostNode\`.
 */

const MinimumViableComponent = function(element) {

  // \`this.node\` in ReactDOM points to the DOM node of a component.
  // \`getHostNode\` should return this.
  this.node = null;

  // \`this._mountImage\` is the representation you use to render a ReactElement
  // hierarchy. This could be an HTML string, a DOM node, or an identifier or
  // simple representation that maps to the final result such as native UI
  // controls.
  this._mountImage = null;

  // \`this._renderedChildren\` is something in the form of null|Child|Array<Child>
  // \`ReactMultiChild.Mixin\` is primarily responsible for managing this property
  this._renderedChildren = null;

  // \`this._currentElement\` is the currently rendered ReactElement. This is
  // important because it allows you to compare the node and props on lifecycle
  // methods to update appropriately.
  this._currentElement = element;
};

MinimumViableComponent.prototype = Object.assign(
  {
    // A nice symmetry to React Lifecycle Methods exists here.
    // These are the required methods to implement. You may additionally provide
    // custom implementations of other lifecycle methods or any arbitrary
    // methods that are private to your implementation.
    getPublicInstance() {},
    mountComponent() {},
    receiveComponent() {},
    unmountComponent() {},
    getHostNode() {}
  },
  ReactMultiChild.Mixin
);

/**
 * Let’s render something that has a JSON serialized view as the *actual* view.
 * Below we will provide a default serialize.toJSON implementation and the bare
 * minimum required to mount and update these ReactElements.
 */
const TinyRendererComponent = function(element) {
  this.node = null;
  this._mountImage = null;
  this._renderedChildren = null;
  this._currentElement = element;
};

const TinyRendererComponentMixin = {
  getPublicInstance() {
    return serialize.toJSON(this.node)
  },

  mountComponent(
    transaction,
    nativeParent,
    nativeContainerInfo,
    context
  ) {
    // In a not-so-tiny renderer you would also want to validate the properties
    // (in dev mode) and apply them to the host environment.
    // I have often seen renderers have a \`render\` method defined on their
    // internal component implementation that is responsible for calling the
    // appropriate methods to update the UI. For example that could be DOM
    // methods, ReactNativeUIManager bridging calls, node-blessed, or
    // node-firmata methods.
    this.node = this._currentElement;
    this.mountChildren(this.node.children, transaction, context);

    return this.node;
  },

  receiveComponent(nextElement, transaction, context) {
    // Typically you would diff the props and apply those to the host
    // environment, though all we need to do is swap out our _currentElement.
    const prevElement = this._currentElement;
    this._currentElement = nextElement;

    // this.updateChildren comes from ReactMultiChild.Mixin
    this.updateChildren(nextElement.props.children, transaction, context);
  },

  // there is no native node
  getHostNode() {
    return this;
  },

  unmountComponent() {},
};

Object.assign(
  TinyRendererComponent.prototype,
  TinyRendererComponentMixin,
  ReactMultiChild.Mixin
);

module.exports = TinyRendererComponent;

/**
 * Congratulations! You now understand the basics of how a React Renderer works.
 * While there are still a lot of React internals we didn’t look at, you saw the
 * foundational pieces.
 *
 * A lot of ReactDOM and ReactNative’s source is integrating the concepts we
 * just learned in this binding layer to a host environment. From this
 * foundation you have a solid understanding of the glue. ReactCore deals with
 * details of reconciliation and transactions, while renderers are plumbing.
 */










💖










`;

