import axios from "axios";

const instance = axios.create({
	baseURL: "http://192.46.211.10:8000/api/",
});

export default instance;
