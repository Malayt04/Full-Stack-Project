import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './Reducer';

// Use configureStore to create the Redux store
const store = configureStore({
  reducer: reducers, // Pass your rootReducer as the 'reducer' property
  middleware: ()=>{
    return [thunk];
  }
})

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
