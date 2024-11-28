<template>
	<view class="bar-container" :style="'width:'+screenWidth+'px ;height:'+height+'px;background-color:'+backgroundColor">
		<view class="indicator" :style="'transform: translateX('+xDiff+'px);background-color:'+indicatorBackgroundColor+';border:'+indicatorPadding+'px solid '+screenBackgroundColor+';width:'+indicatorSize+'px;height:'+indicatorSize+'px;top:'+(-(indicatorSize/2+indicatorPadding))+'px'">	
				<view class="indicator-before" :style="'left:-'+digHoleAngle.width+'px;width: '+digHoleAngle.width+'px;height: '+digHoleAngle.height+'px;top:'+indicatorSize/2+'px;box-shadow: 0.2px -10px 0 0 '+screenBackgroundColor+';'">
					
				</view>
				<view class="indicator-after" :style="'right:-'+digHoleAngle.width+'px;width: '+digHoleAngle.width+'px;height: '+digHoleAngle.height+'px;top:'+indicatorSize/2+'px;box-shadow: -0.2px -10px 0 0 '+screenBackgroundColor+';'">
					
				</view>
		</view>
		<view 
		v-for="(item,index) in items"
		:key="index"
		class="bar-item item-container active" @tap="selectTab(index,item)" :style="'width:'+itemWidth+'px'">			
			<view class="icon" :style="'transform: translateY('+(current==index?-height/2:0)+'px)'">
				<image :src="item.icon.src" :style="'width: '+item.icon.width+'px;height: '+item.icon.height+'px;'"></image>
			
			</view>
			<view class="text" :style="'transform: translateY('+(current==index?-height/4:0)+'px);opacity:'+(current==index?1:0)">
				<slot name="text" :text="item.text"></slot>
			</view>
		</view>

	</view>
</template>
<script>
	export default{
		props:{
			height:{
				default:60,
				type:Number
			},
			backgroundColor:{
				default:"#eee",
				type:String
			},
			indicatorBackgroundColor:{
				default:"green",
				type:String
			},
			screenBackgroundColor:{
				default:"white",
				type:String
			},
			indicatorPadding:{
				default:4,
				type:Number
			},
			indicatorSize:{
				default:50,
				type:Number
			},
			digHoleAngle:{
				default:()=>{
					return{
						width:25,
						height:20
					} 
				},
				type:Object
			},
			items:{
				default:()=>[],
				type:Array
			}
		},
		data(){
			return {
				current:0,
				screenWidth:0			
			}
		},
		computed:{
			xDiff(){
				let indicator = this.indicatorPadding*2+this.indicatorSize
				let count = this.items.length
				return this.screenWidth/count*this.current+(this.screenWidth/count-indicator)/2
			},
			itemWidth(){
				let count = this.items.length
				return this.screenWidth/count
			}
		},
		methods:{
			selectTab(index,item){
				this.current = index
				this.$emit("onTabSelect",index,item)
			}
		},
		created() {
			
			uni.getSystemInfo({
				success: (result) => {
					
					this.screenWidth = result.screenWidth
				},
				fail: (err) => {
					console.log(err)
				}
			})
		},
		
	}
</script>
<style scoped>
	.bar-container {
		position: fixed;
		bottom: 0px;		
		display: flex;
	}

	
	.item-container {
		
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		justify-content: center;
	}

	.icon {		
		position: relative;
		display: flex;
		justify-content: center;
		transition: 0.5s;		
		
	}
	
	.active .icon {
		
		transform: translateY(-30px);
	}

	.icon image {
		align-self: center;
	}

	.text {	
		height: 0px;
		opacity: 0;
		
		align-self: center;				
		transition: 0.2s;
	}

	.text text {
		
		align-self: center;
	}

	.active .text {
		opacity: 1;		
		transform: translateY(-10px);
		display: flex;
	}
	.indicator{
		position: absolute;		
		border-radius: 50%;		
		transition: 0.2s;
	
	}
	
	.indicator-before{
		position: absolute;	
		/* left:-25px;width: 25px;height: 20px; */
		border-top-right-radius: 100%;
		background-color: transparent;
	}
	.indicator-after{		
		position: absolute;		
		/* right: -16px;
		width: 16px;
		height: 16px; */
		border-top-left-radius: 100%;		
		background-color: transparent;
	}
</style>
