import { createStore } from 'redux';
import reducer from '../reducers/Counter.reducers';

const store = createStore(reducer);
export default store;