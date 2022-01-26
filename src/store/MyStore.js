import { createStore } from "redux";
import reducer from "./MyReducer.js"

const MyStore = createStore(reducer);

export default MyStore;


