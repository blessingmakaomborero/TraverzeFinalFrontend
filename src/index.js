import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './components/Pages/Flights_estimates/flights/reducers';
import rootSaga from './components/Pages/Flights_estimates/flights/sagas';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import SupportAdmin from "./components/Pages/Home/support_chat/SupportAdmin"

const path = window.location.pathname

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   <Provider store={store}>
   {path.indexOf('/support') === -1 ? <App /> : <SupportAdmin /> }
     
  { /*<App >*/ }
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
