import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "../Reducers";

export default function configureStore(initialState) {
  const middlewares = [thunk];

  const store = createStore(
    combineReducers,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f // add support for Redux dev tools
    )
  );

  if (module.hot) {
    module.hot.accept("../Reducers", () => {
      const nextReducer = require("../Reducers").default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
