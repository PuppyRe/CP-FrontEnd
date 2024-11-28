import { requestAsync } from "./httpHelper";

export const IndexApi = {
	
	index: (params) => requestAsync('/index/index', params),
	
}