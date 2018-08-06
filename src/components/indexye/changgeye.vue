<style scoped lang="less">
	.bofangye{
		position:fixed;
		width:100%;
		height:100%;
		left:0;
		top:0;
		z-index:2;
		.bofangpan{
			position:absolute;
			height:220px;
			width:220px;
			top:10%;
			left:50%;
			margin-left:-110px;
			
			
			img{
				position:absolute;
			}
			.huan{
				width:220px;
				height:220px;
			}
			.tu{
				width:160px;
				height:160px;
				border-radius:50%;
				overflow:hidden;
				top:50%;
				left:50%;
				margin-left:-80px;
				margin-top:-80px;
			}
		}
		.zhizhen{
				position:absolute;
				width:110px;
				height:160px;
				left:50%;
				margin-left:-35px;
				top:60px;
				transform-origin:left top;
				transform:rotate(-25deg);
				transition:all 5s ease 0s;
			}
			.xuanzhuan{
				transform:rotate(-10deg);
			}
		.bofangqi{
			position:absolute;
			width:100%;
			height:100px;
			border:1px solid red;
			top:50%;
			background-color: #000;
			color:white;
		}
		.tiaochu{
			position:absolute;
			width:50px;
			height:50px;
			font-size: 50px;
			color:white;
			left:30px;
			top:15px;
		}
	}
</style>
<template>
	<div v-if="shuju2.isshowAudio" class="bofangye">
		<div class="tiaochu iconfont icon-houtui1">
			
		</div>
		<img :src="shuju2.playerBg" alt="">
		<div class="bofangpan">
			<img :src="shuju2.ablumPic" alt="" class="tu">
			<img src="../../../static/img/cd-mine.png" alt="" class="huan">
			
		</div>
		<div class="zhizhen" :class="">
			<img src="../../../static/img/swith.png" alt="">
		</div>
		<div class="bofangqi">
			<audio :src="shuju2.albumList[shuju2.index].musicUrl" autoplay></audio>
		</div>
		<span class="range"></span>
	</div>

</template>
<script>
	export default {
		props:["shuju2"],
		methods:{
		}
	}
</script>