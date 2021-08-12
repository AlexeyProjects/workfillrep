<template>
  <div>
    <Nuxt />
  </div>
  
</template>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap');
	html {
		font-size: 10px;
	}
	body {
		font-size: 1.6rem;
		font-family: 'Montserrat', sans-serif;
	}
	* {
		padding: 0;
		margin:  0;
		box-sizing: border-box;
	}
</style>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        item: 'xyu'
      }
    },
    methods: {
      ...mapActions(['GET_DATAMAIN_DATA'])
    },
    mounted() {
      this.GET_DATAMAIN_DATA()
    }
  }
</script>