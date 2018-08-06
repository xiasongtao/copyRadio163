<style>
	
</style>
<template>
	<div>
		这个是电台页
		<button @click="abc">给选歌页</button>
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
		methods:{
			abc(){
				Bus.$emit('mag','电台页过来的文件')
			}
		}
	}
</script>