export default `/***
 * The Tiny React Renderer.
 */

/**
 * The four core modules in a React renderer are:
 *
 * * Mount
 * * Component
 * * DefaultInjection
 * * ReconcileTransaction
 *
 * \`Mount\` can be thought of a renderer's \`main\` method. All userland code
 * enters the React world through this door.
 *
 * \`Component\` is the internal class to a consumer's component. This is where
 * property diffing is computed and applied and where the realization of a
 * renderer takes place.
 *
 * \`ReconcileTransaction\` is a class which maintains the logic for how
 * reconciliations take place. This will likely probably change with Fiber.
 *
 * \`DefaultInjection\` must inject its implementations before any other work can
 * be done. It is part of a renderer's initialization process. This will likely
 * probably change with Fiber.
 */

const invariants = require('./utilities/invariants');
const instantiateReactComponent = require('react/lib/instantiateReactComponent');
const ReactReconciler = require('react/lib/ReactReconciler');
const ReactInstanceHandles = require('react/lib/ReactInstanceHandles');
const ReactUpdates = require('react/lib/ReactUpdates');
const DefaultInjection = require('./injection');

/**
 * Inject the unique aspects of your renderer into React core immediately. These
 * will be things like your event system, generic component handler,
 * reconciliation strategy, or batching strategy.
 */
DefaultInjection.inject();

/**
 * Step 1. Userlands entry into the React world. Regardless of the renderer you
 * use—whether ReactDOM, ReactNative, ReactHardware, ReactBlessed, or one of the
 * many others—all \`ReactDOM.render|RN.registerComponent|ReactBlessed.render\`
 * type of methods will enter the React world through this method.
 *
 * For example, the following will reach this method in the \`ReactMount\` module.
 * Your signature should have the \`ReactElement\` as the first argument, an
 * optional callback as the last argument, and any environment-specific
 * arguments in between.
 *
 * \`\`\`
 * ReactDOM.render(
 *   <div><span>Hello</span>, <b>World</b></div>,
 *   document.getElementById('app'),
 *   (inst) => console.log(inst)
 * );
 * \`\`\`
 *
 * \`\`\`
 * ReactDOM.render(
 *   React.createElement(
 *     'div',
 *     null,
 *     React.createElement('span', 'Hello'),
 *     ', ',
 *     React.createElement('b', 'World')
 *   ),
 *   document.getElementById('app'),
 *   (inst) => console.log(inst)
 * );
 * \`\`\`
 **/

const render = (
  nextElement,
  /* hostSpecificThing, */
  callback
) => {

  // The first thing you'll want to do in here is confirm the caller passed in a
  // valid ReactElement. The implementation of this is the same across renderers
  // with the exception of the error message through when the invariant fails.
  invariants.isValidElement(nextElement);

  // A key objective of writing a renderer is to make interacting with the host
  // system simpler. A given renderer should seek to help its users to avoid
  // simple mistakes such as passing in a non-existent DOM node.
  warning.isValidHostThing(hostSpecificThing);

  // Woohoo! We’re interacting with React internals! Since any application can
  // have multiple roots, we want to get an identifier from the
  // \`ReactInstanceHandles\` component.
  //
  // Next we instantiate a new ReactComponent from the ReactElement passed in.

  const rootId = ReactInstanceHandles.createReactRootID(0);
  const component = instantiateReactComponent(nextElement);

  // Assuming you’ve read the React Reconciliation Algorithm article on the
  // React docs, this may be familiar. The “public” API for accomplishing this
  // is done with a batching strategy and transaction. React provides default
  // implementations for both of these and does not require any effort from us
  // other than calling them.

  ReactUpdates.batchedUpdates(() => {
    const transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
    transaction.perform(() => {
      // The \`component\` here is an instance of your \`ReactHostComponent\` class.
      ReactReconciler.mountComponent(
        component,
        transaction,
        rootId,
        {}
      );
      if (callback) {
        callback(component.getPublicInstance());
      }
    });
    ReactUpdates.ReactReconcileTransaction.release(transaction);
  });
};

// Congratulations! You’ve done it! You have a React renderer! Though so far
// we haven’t done anything interesting. For that we need to implement our
// ReactHostComponent class.

module.exports = render;




`;
