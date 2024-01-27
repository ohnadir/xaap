import React from 'react';
import StackNavigator from './navigation/StackNavigator';
import { Provider } from "react-redux";
import store from "./src/Redux/store";
function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </>
  );
}

export default App;
