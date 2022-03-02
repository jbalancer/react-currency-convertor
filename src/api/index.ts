import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ApiResponseStatus } from "./types";

const apiConfig: AxiosRequestConfig = {
	baseURL: `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_CURRENCY_API_KEY}/`
};

const api: AxiosInstance = axios.create(apiConfig);

export default {

	get<T>(url: string): Promise<T | null> {
		return api.get(url)
			.then(r => (
					r.status >= 200
					&& r.status < 300
					&& r.data
					&& r.data.result === ApiResponseStatus.success
				) ? r.data : null)
			.catch(() => null);
	}

};