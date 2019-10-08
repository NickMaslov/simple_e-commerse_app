import { createStore, applyMiddleware } from "redux";

// Logger with default options
import logger from "redux-logger";

import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";

export const SportsStoreDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer),
  applyMiddleware(logger)
);
