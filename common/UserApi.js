import { requestAsync } from "./httpHelper";


export const UserApi = {
	
	login: (params) => requestAsync('/user/login', params),
	signUp: (params) => requestAsync('/user/register',params),
	GetBasicInfo:(params) =>requestAsync('/user/GetBasicInfo',params),
}