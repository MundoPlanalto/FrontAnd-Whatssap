import axios from "axios";

const api = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	withCredentials: true,
	httpsAgent: new (require('https').Agent)({
		rejectUnauthorized: false, // Desabilita a validação SSL
	})
});

export const openApi = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	httpsAgent: new (require('https').Agent)({
		rejectUnauthorized: false, // Desabilita a validação SSL
	})	
});

export default api;
