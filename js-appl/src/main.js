import "./style.css";
import MatrixComponents from "./components/MatrixComponents.js";
import configObj from "./config/matrix-config.json";
import MatrixStates from "./service/MatrixStates.js";
const { rows, columns, interval } = configObj;
new MatrixComponents(rows, columns, document.querySelector(".grid"), new MatrixStates());
