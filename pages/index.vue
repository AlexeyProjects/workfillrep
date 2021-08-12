<template>
  <div class="question container">
      <questionItem
      v-for="(item, key, index) in DATAMAIN"
      :question="item"
      >
        
      </questionItem>
      <div 
      @click="sendJson"
      class="btn">кнопка</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['DATAMAIN'])
    },
    methods: {
      sendJson() {
        axios.post('test.php', 'this.DATAMAIN'
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      }
    }

  }
</script>
