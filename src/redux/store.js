import { createStore } from "redux";
import reducers from "./reducers";

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store yani hafıza yeri yazıldı burada reducers yazılıyor

