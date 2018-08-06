<style scoped lang="less">
	.header{
		background-color: #c20c0c;
		width:100%;
		height:50px;
		line-height:50px;
		span{
			float:left;
			color:white;
			height:50px;
			width:20%;
			text-align:center;
		}
		ul{
			width:60%;
			list-style: none;
			float:left;
			li{
				float:left;
				color:white;
				height:50px;
				width:33.3%;
				text-align:center;
				&.cur{
					background-color:#d43c33;
				}
			}
		}
		
	}
	.ani-enter-active{
		transition:all 0.5s ease;
	}
	.ani-leave-active{
		display:none;
		transition:all 0.5s ease;
	}
	.ani-enter,.ani-leave-to{
		transform:translateX(300px);
	}
</style>
<template>
  <div id="app">
  	<down></down>
  	<div class="header">
  		<span class="iconfont icon-caidan"></span>
  		<ul class="nav">
  			<li v-for="item in nav" :class="[item.piclass,{cur:$route.path==item.url}]" class="iconfont" @click="tiaozhuan(item.url)"></li>
  		</ul>
  		<span class="iconfont icon-zhuanjiguangpan"></span>
  	</div>
    <transition name="ani">
    	<router-view/>
    </transition>
    <transition name="ani">
    	<zhuanjiList :shuju="shuju"></zhuanjiList>
    </transition>
    <transition name="ani">
    	<changgeye :shuju2="shuju2"></changgeye>
    </transition>
  </div>
</template>

<script>
	import zhuanjiList from "./components/indexye/zhuanjiList.vue";
	import down from "./components/gonggong/down.vue";
	import changgeye from "./components/indexye/changgeye.vue"
export default {
	data(){
		return {
			nav:[
				{url:'/indexye',piclass:"icon-music"},
				{url:'/xuangeye',piclass:"icon-wangyiyunyinlezizhi-copy"},
				{url:'/diantaiye',piclass:"icon-diantai"},
			]
		}
	},
	created(){
			this.$store.dispatch("allstore/GETALL")
		},
	methods:{
		tiaozhuan(url){
			this.$router.push({path:url})
		},
		goshouye(){
			this.$router.push({path:"/indexye"})
		}
	},
	computed:{
		shuju(){
			return this.$store.state.allstore.albumList
		},
		shuju2(){
			return this.$store.state.allstore.audio
		}
	},
	components:{
		zhuanjiList,
		down,
		changgeye
	}
}
</script>


