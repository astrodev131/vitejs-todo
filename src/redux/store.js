import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer } from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persisteReducer = persistReducer(persistConfig, reducer);
const store = configureStore(
  {
    reducer: persisteReducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { persistor, store };
