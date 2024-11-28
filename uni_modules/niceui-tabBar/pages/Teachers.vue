<template>
	<view>
		<view>我立了</view>
		<custom-tab-bar :items="tabItems" :current-index="currentTab" @item-click="onTabClick" :color="color" 
		:selected-color="selectColor"></custom-tab-bar>
	</view>
</template>

<script>
import { IndexApi } from '@/common/IndexApi';
import CustomTabBar from '@/uni_modules/niceui-tabBar/components/niceui-tabBar/niceui-tabBar.vue';  
import tabbar from '@/uni_modules/niceui-tabBar/common/tabbar.js'
	export default {
		components:{
			CustomTabBar
		},
		
		data(){
			return{
				currentTab:1,
				tabItems:tabbar.tabItems,
				color:tabbar.color,
				selectColor:tabbar.selectedColor,
			}
			
		},
		onLoad() {
			
		},
		methods:{
			
			
			onTabClick(index){
				let self = this;
				if(index != self.currentTab){
					uni.reLaunch({
						url:self.tabItems[index].pagePath
					})
				}
				
			},
		}
		
	}
</script>

<style>
</style> 