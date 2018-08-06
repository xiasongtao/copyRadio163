
<style>
	img{
		width:100%;
		height:auto;
	}
</style>
<template>
	<div>
			 <swiper :options="swiperOption">
	 			<swiper-slide v-for="(item,index) in shuju" :key="index">
	 				<a :href="item.picurl"><img :src="item.picsrc" alt=""></a>
	 			</swiper-slide>
	 			<div class="swiper-pagination"  slot="pagination"></div>
			 </swiper>
	</div>
	
</template>
<script>
	export default {
		props:["shuju"],
		data(){
			return {
				swiperOption: {
					autoplay: true,
          			speed: 400,
          			loop:true,
          			grabCursor: true,
          			setWrapperSize: true,
          			autoHeight: true,          
          			scrollbar: '.swiper-scrollbar',
          			mousewheelControl: true,
          			observeParents: true,
					loop:true,
          			pagination: {
            				el: '.swiper-pagination'
          			}
       			}
      	}
    },
    mounted() {

    }
  }
</script>