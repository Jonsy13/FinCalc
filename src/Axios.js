import axios from "axios";

const instance = axios.create({
  baseURL: "https://finance-app-95857.firebaseio.com/"
});

export default instance;
