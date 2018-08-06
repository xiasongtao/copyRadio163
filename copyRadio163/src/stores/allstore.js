import Vue from "vue"
export default {
	namespaced:true,
	state:{
		albumList:{
			isshowzhuanji:false,
			nazhangzhuanji:null,
			nashouge:null
		},
		myList:{},
		audio:{
			isshowAudio:false,
			albumIndex:null,
			albumList:[],
			index:null,
			playerBg:null,
			ablumPic:null
		},
		indexyexianshi:true
	},
	mutations:{
		GETALL(state,data){
			state.myList = data.mapList;
		},
		CHANGEINDEX(state,{index}){
			state.audio.index = index;
		},
		ZHUANJIBOFANG(state,shuju){
			state.albumList.isshowzhuanji = shuju.isshowzhuanji,
			state.albumList.nazhangzhuanji = shuju.nazhangzhuanji,
			state.albumList.nashouge = shuju.nashouge
		},
		CHANGE(state){
			state.albumList.isshowzhuanji = false
		},
		CHANGEBOFANG(state,{item,index}){
			state.albumList.nashouge = index
		},
		NOWBOFANG(state,{item,index}){
			state.audio.isshowAudio = true,
			state.audio.index = index,
			state.audio.playerBg = item.playerbg,
			state.audio.ablumPic = item.albumbg,
			state.audio.albumList = item.albumList

		}
	},
	actions:{
		GETALL({commit}){
			Vue.axios.get('../static/data.json').then(res=>{
				commit('GETALL',res.data)
			})
		}
	}
}