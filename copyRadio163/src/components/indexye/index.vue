<style scoped lang="less">
	.list{
		.hotsinger{
			height:40px;
			width:100%;
			background-color: #d43c33;
			text-align: center;
			font-weight:normal;
			font-size:20px;
			line-height:40px;
			color:white;
		}
		.geming{
			color:#333;
			img{
				width:15px;
				height:15px;
				margin-left:50px;
			}
		}
		.geshou{
			color:#ccc;
			font-size:12px;
			margin-left:25px;
		}
		ul{
			margin-left:10px;
			list-style: none;
			li{
				margin:10px auto;
				padding-bottom:10px;
				border-bottom:1px solid #eee;
				.cur{
				color:red;
			}
			}
			
		}
		.bofang{
			float:right;
			margin-right:20px;
		}
	}
	.album{
		overflow: hidden;
		text-align:center;
		.tuijianzhuanji{
			margin:5px auto;
			background-color: #d43c33;
			color:white;
			height:40px;
			font-weight:normal;
			font-size:20px;
			line-height:40px;
		}
		ul{
			list-style:none;
				li{
					float:left;
					height:200px;
					width:45%;
					margin:2.5%;

			}
		}
	}
	.footer{
		height:150px;
		margin-top:40px;
		width:100%;
		text-align:center;
		.biaoti{
			margin-bottom:20px;
			font-size:30px;
		}
		.dakai{
			margin-bottom:10px;
			height:40px;
			width:80%;
			border-radius: 20px;
			border:1px solid red;
			margin-left:10%;
			line-height:40px;
			color:red;
		}
		.yunying{
			font-size:10px;
			color:#555;
		}
	}
</style>
<template>
	<div class="indexye">
		<Vuelunbo :shuju="shuju"></Vuelunbo>
		<div class="album">
			<h4 class="tuijianzhuanji">推 荐 专 辑</h4>
			<ul>
				<li v-for="(item,index) in album" :key="index" @click = "zhuanji(item,index)">
					<img :src="item.albumImg" alt="">
					<h5>{{item.albumTitle}}</h5>
				</li>
			</ul>
		</div>
		<div class="list">
			<h4 class="hotsinger">热 门 歌 曲</h4>
			<ul>
				<li v-for="(item,index) in tuijian" :key="index" @click="dianjibofang(index)">
					<div class="geming" :class="{cur:index==$store.state.allstore.audio.index && $store.state.allstore.audio.albumIndex == null}">
						{{index+1}}、{{item.musicName}}
						<span class="geshou">{{item.musicSinger}}</span>
						<span class="iconfont icon-laba"></span>
						<img v-if="index==$store.state.allstore.audio.index && $store.state.allstore.audio.albumIndex == null" src="../../../static/img/jinjie.gif" alt="" class="xuanlv">
					</div>
					<audio :src="item.musicUrl"></audio>
				</li>
			</ul>
		</div>
		<div class="footer">
			<div class="biaoti">网易云音乐</div>
			<div class="dakai">打开App，发现更多好音乐></div>
			<div class="yunying">我的公司版权所有&copy;1997-2018背景的科技有限公司运营</div>
		</div>
	</div>
</template>
<script>
	import Vuelunbo from "./Vuelunbo.vue"
	export default {
		data(){
			return {
				shuju:[
					{"picurl":"http://music.163.com/m/album?id=71614231","picsrc":"http://p1.music.126.net/Yw8_oWn1CiOWqcpRTkEzZw==/109951163399777585.jpg"},
					{"picurl":"http://music.163.com/m/album?id=71614231","picsrc":"http://p1.music.126.net/fhgvpX9jTwc8bYIns8WGlw==/109951163398875120.jpg"},
					{"picurl":"http://music.163.com/m/album?id=71614231","picsrc":"http://p1.music.126.net/VuT3kVEPiGeL-MMCH437Ww==/109951163399767974.jpg"},
					{"picurl":"http://music.163.com/m/album?id=71614231","picsrc":"http://p1.music.126.net/oW3lMyBjEvbGRJa418aFVg==/109951163399774190.jpg"}
				]
			}
		},
		computed:{
			album(){
				return this.$store.state.allstore.myList.album
			},
			tuijian(){
				return this.$store.state.allstore.myList.recommend
			},
			indexyexianshi(){
				return this.$store.state.allstore.indexyexianshi
			}
		},
		components:{
			Vuelunbo
		},
		methods:{
			dianjibofang(index){
				this.$store.commit("allstore/CHANGEINDEX",{index})
			},
			zhuanji(item){
				this.$store.commit("allstore/ZHUANJIBOFANG",{
					isshowzhuanji:true,
					nazhangzhuanji:item,
					nashouge:null
				})
			}
		}
	}
</script>