import axios from "axios";

const client = axios.create({ baseURL: "https://referal-n9xs.onrender.com/api" });

export default client;