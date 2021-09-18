import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-tinder-clone-server.herokuapp.com",
});

export default instance;
