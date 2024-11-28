<template>
	<view>
		<view>
			<input placeholder="请输入昵称" v-model="txtAccount" />
			<input placeholder="请输入手机号" v-model="txtMobile" />
			<input placeholder="请输入邮箱" v-model="txtEmail" />
			<input placeholder="请输入密码" type='safe-password' v-model="txtPassword" />
			
			<!-- <el-input v-input.num v-model="" /> -->
		</view>
		<view>
			<button @click="btnOnConfirm">确认</button>
		</view>
	</view>
</template>

<script>
import { IndexApi } from '../common/IndexApi';
import { UserApi } from '../common/UserApi';
	export default{
		data(){
			return{
				txtAcount:"",
				txtMobile:"",
				txtEmail:"",
				txtPassword:"",
			}
			
		},
		onShow() {
			console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		},
		onReady() {
			console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		},
		onload(){
			console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
			
		},
		methods:{
			btnOnConfirm(){
				const self = this;
				
				
				
			},
			
		}
		
	}
	
</script>

<style>
</style>