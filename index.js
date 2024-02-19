import { h, init } from './node_modules/snabbdom';

const patch = init([]);

let state = { count: 0 };

const updateState = (newState) => {
  state = { ...state, ...newState };
  render();
  console.log('State changed:', state);
};

const mountComponent = () => {
  console.log('Component mounted');
};

const useEffect = (effectFunction) => {
  effectFunction();
};

const template = (state, props) =>
  h('div#app', { hook: { insert: mountComponent } }, [
    h('h1', `Count: ${state.count}`),
    h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Add'),
  ]);

const render = () => {
  const vnode = template(state, {});
  patch(document.getElementById('app'), vnode);
};

render();

export default { updateState, useEffect };

