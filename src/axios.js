import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-eead5/us-central1/api", // cloud function
});

export default instance;