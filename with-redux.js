// 최초 한 번은 무조건 실행
function reducer(state, action) {
  if (state === undefined) {
    return {
      color: "yellow",
    };
  }

  let newState;
  if (action.type === "CHANGE_COLOR") {
    newState = Object.assign({}, state, { color: action.color });
  }
  console.log(action.type, action, state, newState);
  return newState;
}
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function red() {
  const state = store.getState();
  document.querySelector("#red").innerHTML = `
    <div class="container" id="component_red" style="background-color:${state.color}">
      <h1>red</h1>
      <input type="button" value="fire" onClick="
        store.dispatch({type: 'CHANGE_COLOR', color: 'red'});
      "/>
    </div>
  `;
}
store.subscribe(red);
red();

function blue() {
  const state = store.getState();
  document.querySelector("#blue").innerHTML = `
    <div class="container" id="component_blue" style="background-color:${state.color}">
      <h1>blue</h1>
      <input type="button" value="fire" onClick="
        store.dispatch({type: 'CHANGE_COLOR', color: 'blue'});
      "/>
    </div>
  `;
}
store.subscribe(blue);
blue();

function violet() {
  const state = store.getState();
  document.querySelector("#violet").innerHTML = `
    <div class="container" id="component_violet" style="background-color:${state.color}">
      <h1>violet</h1>
      <input type="button" value="fire" onClick="
        store.dispatch({type: 'CHANGE_COLOR', color: 'violet'});
      "/>
    </div>
  `;
}
store.subscribe(violet);
violet();
