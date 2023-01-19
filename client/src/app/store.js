import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const stripe = require("stripe")(
  "sk_test_51MRreeCXI7FS4MjAGVBhrpu4XDnKaq6OpZMLYdwokJtIOtjtWhelGPpH7moBCZPtDZar5ZPsgQqKlfWXl6M2BSl400kQbKcKSR"
);

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
