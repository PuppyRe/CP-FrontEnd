<template>  
  <view class="custom-tab-bar" :style="{backgroundColor:backgroundColor,borderTopColor:borderStyle}">  
	<view class="bar-item" :class="item.up?'up-item':''"
      v-for="(item, index) in items"
      :key="index"
      :style="{ fontSize:fontSize,color:currentIndex === index ? selectedColor : color}"
      @click="onItemClick(index)">
      <image class="bar-icon" :src="item.selectedIcon" v-if="currentIndex === index"></image>
	  <image class="bar-icon" :src="item.icon" v-else></image>
      <view class="item-text">{{ item.text }}</view>
	</view>
  </view>  
</template>  
  
<script>  
export default {  
  props: {  
    items: {  
      type: Array,  
      default: () => []  
    },  
    currentIndex: {  
      type: Number,  
      default: 0  
    },
	
	color: {  
      type: String,  
      default: '#7A7E83' 
    },
	selectedColor: {  
      type: String,  
      default: "#c1a400"
    }, 
	borderStyle: {  
      type: String,  
      default: "#eee"
    },
	backgroundColor: {  
      type: String,  
      default:"#ffffff"
    },
	fontSize: {  
      type: String,  
      default: "28rpx"
    }
  },  
  methods: {  
    onItemClick(index) {
      this.$emit('item-click', index);  
    }  
  }  
};  
</script>  
  
<style lang="scss" scoped>  
.custom-tab-bar {  
  position: fixed;
  bottom:0;
  width: 100vw;
  height: 120rpx;
  display: flex;  
  justify-content: space-around;  
  border-top: solid 1px #eee;
  box-shadow: 0px 0px 10px 1px #eee;
	.bar-item{
		height: 100%;
		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		.bar-icon{
			width: 50rpx;
			height: 50rpx;
		}
	} 
	.up-item{
		margin-top:-35rpx;
		.bar-icon{
			width: 105rpx;
			height: 105rpx;
			border-radius: 50rpx;
			box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.2);
		}
		.item-text{
			margin-top: 15rpx;
		}
	}
}
</style>