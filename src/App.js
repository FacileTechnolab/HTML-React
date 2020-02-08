import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Routes from "./routes";

import { appReducer } from "./redux/reducer";

function App() {
  const store = createStore(appReducer);
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
