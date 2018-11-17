import createStore from 'unistore';
import devtools from 'unistore/devtools';

const initialState = { count: 0, users: [] };
const Store = process.env.NODE_ENV === 'production' ?  createStore(initialState) : devtools(createStore(initialState));

export default Store;
