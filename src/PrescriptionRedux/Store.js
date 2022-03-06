import {createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { persistStore, persistReducer} from 'redux-persist';
import reducer from "./Reducer";
import storage from "redux-persist/lib/storage";



const persistConfig = {
    key:"main-root",
    storage,
}

const persistedReducer = persistReducer(persistConfig,reducer)

const store = createStore(persistedReducer,applyMiddleware(thunk))

const Persistor = persistStore(store)

export {Persistor}
export default store;