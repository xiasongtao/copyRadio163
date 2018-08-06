<style scoped lang="less">
@font-face{
		font-family:fzjianti;
		src:url("../../../static/font/fzjianti.ttf") format(TrueType);
	}
	.title{
		height:64px;
		width:100%;
		background-color:#d43c33;
		line-height:74px;
		
		.text{
			font-size:25px;
			float:left;
			height:64px;
			color:white;
			font-family:fzjianti;
		}
		.logo{
			float:left;
			height:64px;
			img{
				margin-top:21px;
				margin-left:5px;
				height:26px;
				margin-right:5px;
				width:30px;
			}
		}
		.down{
			float:right;
			color:white;
			border:1px solid white;
			width:100px;
			height:35px;
			margin-top:15px;
			margin-right:10px;
			border-radius:17.5px;
			text-align:center;
			line-height:35px;
			.lianjie{
				text-decoration: none;
				color:white;
			}
		}
	}
	 
</style>
<template>
	<div class="title">
  		<div class="logo">
  			<img src="../../../static/img/logo.png" alt="">
  		</div>
  		<div class="text" @click="goshouye">网易云音乐</div>
  		<div class="down"><a href="http://music.163.com/api/android/download/latest2" class="lianjie">下载APP</a></div>
 	</div>
</template>
<script>
	export default{
		methods:{
			goshouye(){
				this.$router.push({path:"/indexye"})
				this.$store.state.allstore.albumList.isshowzhuanji = false
			}
		}
	}
</script>