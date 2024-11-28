<template>
	<view>
		<view v-show="!isLogin">
		<!-- 	<input placeholder="请输入用户名" v-model="txtAccount" />
			<input placeholder="请输入密码" type='safe-password' v-model="txtPassword" />
			 -->
			<button @click="btnOnLogin">登录</button>
		</view>
		<view v-show="!isLogin">
			<button @click="btnToRegister">注册</button>
		</view>
		
		<view v-show="isLogin" style="display: flex;">
			{{username}}
		</view>
		<view>
			<button @click="btnOnRequest">进入</button>	
		</view>
				
	</view>
</template>

<script>
import { IndexApi } from '../common/IndexApi';
import { UserApi } from '../common/UserApi';
 
import tabbar from '@/uni_modules/niceui-tabBar/common/tabbar.js'
	export default {
		data() {
			return {
				userinfo:[],
				name: "空请求",
				txtAccount: "",
				txtPassword: "",
				isLogin: false,
				
				avatar:"",
				token:"",
				username:"",
			}
		},
		onLoad() {
			
			const self = this;
			self.token = uni.getStorageSync('token');
			
			if(self.token){
				self.isLogin = true;
				self.getKeyInfo();
				
			}
			else{
				self.isLogin = false;
			}
			console.log(self.isLogin);
			
			
		},
		methods: {
			getKeyInfo(){
				const self = this;
				UserApi.GetBasicInfo({}).then(resp=>{
					console.log("!!!!!!!!!!!!!!!!!! username:" + resp.username);
					self.username = resp.username;
					self.avatar = resp.avatar;
				});
				
			},
			// btnOnLogin(){
			// 	const self = this;
			// 	UserApi.login({account: self.txtAccount, password: self.txtPassword}).then(resp => {
			// 		uni.setStorageSync('token', resp.userinfo.token);
			// 		self.id = resp.userinfo.user_id;
			// 		uni.showToast({
			// 			title: '登录成功',
			// 			icon: 'success'
			// 		});
			// 	});
			// 	uni.reLaunch({
			// 		url:"/pages/Home",
			// 	})
			// },
			btnOnLogin(){
				const self = this;
				UserApi.login({account: admin, password: 123456789}).then(resp => {
					uni.setStorageSync('token', resp.userinfo.token);
					self.id = resp.userinfo.user_id;
					uni.showToast({
						title: '登录成功',
						icon: 'success'
					});
				});
				uni.reLaunch({
					url:"/pages/Home",
				})
			},
			
			btnOnRequest() {
				// ?
				const self = this;
				// IndexApi.index({balance: 500}).then(resp => {
				// 	uni.showToast({
				// 		title: '操作成功',
				// 		icon: 'success'
				// 	});
				// });
				uni.navigateTo({
					url:'/uni_modules/niceui-tabBar/pages/Menu',
				})
				
			},
			btnToRegister(){
				const self = this;
				uni.navigateTo({
					url:'/pages/Register',
					
				})
				
			},
		}
	}
</script>

<style>

</style>
