<style>
	
</style>
<template>
	<div>
	这是选歌页面
	<p>{{mage}}234</p>
</div>
</template>
<script>
	import Bus from "../bus.js"
	export default {
		data(){
			return {
				mage:""
			}
		},
		mounted(){
			let self = this
			Bus.$on('mag',(e)=>{
				this.mage = e
				console.log(`传过来的数据:${e}`)
			})
		}
	}
</script>