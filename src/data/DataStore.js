import { createStore, applyMiddleware } from "redux";

// Logger with default options
import logger from "redux-logger";

import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware";

export const SportsStoreDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer),
  applyMiddleware(asyncActions, logger)
);
