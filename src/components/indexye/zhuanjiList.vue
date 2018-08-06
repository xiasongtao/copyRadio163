<style scoped lang="less">
	.zhuanjixiangqing{
		position:fixed;
		width:100%;
		height:100%;
		background-color: #eee;
		left:0;
		top:0;
		z-index:1;
		.zhuanjiming{
			position:absolute;
			color:white;
			top:100px;
			left:50%;
			font-size:30px;
			margin-left:-100px;
			border:1px solid red;
			width:200px;
			height:50px;
			border-radius:25px;
			text-align:center;
			line-height:50px;
			box-shadow: 1px 3px 3px #fff;
			background-color:#d43c33;
		}
		.xiangqing{
			position:absolute;
			width:100%;
			height:150px;
			left:20px;
			top:200px;
			.xiaopic{
				float:left;
				width:150px;
				height:150px;
			}
			.geshouzhuanji{
				float:left;
				background-color:rgba(200,200,200,0.2);
				margin-left:20px;
				margin-top:100px;
				.tuhezi{
						img{
							position:relative;
							width:30px;
							height:30px;
							overflow:hidden;
							border-radius:15px;
							top:10px;
					}
				}
			}
		}
		.liebiao{
			margin-top:20px;
			list-style: none;
			li{
				margin-left:10px;
				height:25px;
			}
			.cur{
					color:red;
				}
			.xuanlv{
				width:15px;
				height:15px;
				margin-left:20px;
			}
		}
	}
	.fanhui{
		position:absolute;
		width:50px;
		height:50px;
		left:10px;
		top:74px;
		border-radius:15px;
		overflow:hidden;
	}
	.bofangtu{
		float:right;
		margin-right:20px;
		
	}
	.bofangtuzhuan{
		animation:xuanzhuan 3s linear 0s infinite;
	}
	 @-webkit-keyframes xuanzhuan{
             0%{
                transform:rotate(0deg);
             }
             50%{
                transform:rotate(180deg);

             }
             100%{
                transform:rotate(360deg);

             }
        }
</style>
<template>
	<div v-if="shuju.isshowzhuanji" class="zhuanjixiangqing">
		<down></down>
		<div class="picbg">
			<div class="fanhui" @click="change">
				<img src="../../../static/img/fanhui.png" alt="">
			</div>
			<div class="zhuanjiming">{{shuju.nazhangzhuanji.albumTitle}}</div>
			<img :src="shuju.nazhangzhuanji.albumbg" alt="">
			<div class="xiangqing">
				<div class="xiaopic">
					<img :src="shuju.nazhangzhuanji.albumImg" alt="">
				</div>
				
				<div class="geshouzhuanji">
					<p>
						专辑：{{shuju.nazhangzhuanji.albumTitle}}
					</p>
					<p class="tuhezi">
						<img :src="shuju.nazhangzhuanji.albumbg" alt="">
						歌手：{{shuju.nazhangzhuanji.albumSinger}}
					</p>
				</div>
			</div>
		</div>
		<ul class="liebiao">
			<li v-for="(item,index) in shuju.nazhangzhuanji.albumList"  @click="bofangla(shuju.nazhangzhuanji,index)">
				<div  @click="bofang(item,index)" :class="{cur:index==shuju.nashouge}">
					{{index+1}}、{{item.musicName}}
					<img v-if="index==shuju.nashouge" src="../../../static/img/jinjie.gif" alt="" class="xuanlv">
					<span class="iconfont icon-bofang bofangtu" :class="{bofangtuzhuan:index==shuju.nashouge}"></span>
				</div>
			</li>
		</ul>
		<audio src=""></audio>
	</div>
</template>
<script>
	import down from "../gonggong/down.vue"
	export default{
		props:["shuju","shuju2"],
		components:{
			down
		},
		methods:{
			change(){
				this.$store.commit("allstore/CHANGE")

			},
			bofang(item,index){
				this.$store.commit("allstore/CHANGEBOFANG",{item,index})
			},
			bofangla(item,index){
				this.$store.commit("allstore/NOWBOFANG",{item,index})
			}
		}
	}
</script>