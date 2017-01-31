<template>
  <div> 
    <div id="beepsWraper">
      <beep v-for="beep in beeps" :beep="beep"></beep>
    </div>
    <div id="beepsLoading" class="text-center" v-show="beepsLoading">
      <i class="fa fa-spin fa-spinner"></i>
    </div>
  </div>
</template>

<script>
  import Beep from 'components/dash/Beep.vue';

  export default {
    name: 'BeepList',
    components: {
      beep: Beep,
    },
    created: function () {
      this.beeps = [];
      this.getBeeps(1);

      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    data: function () {
      return {
        beeps: [],
        page: {},
        beepsLoading: false
      }
    },
    methods: {
      getBeeps: function (page) {
        this.beepsLoading = true;
        this.$http.get('/beeps?page=' + page)
          .then(function (res) {
            this.beeps = this.beeps.concat(res.body.data);
            this.page = {current: res.body.current_page, last: res.body.last_page};
            this.beepsLoading = false;
          })
          .catch(function () {
            this.beepsLoading = false;
          })
      },
      handleScroll: function () {
        if (document.body.scrollHeight - window.innerHeight - document.body.scrollTop < 1) {
            if (this.page.current < this.page.last) {
                this.getBeeps(this.page.current+1);
            }
        }
      }
    }
  }
</script>
<style scoped>
  #beepsWraper {
    margin: 0 -20px;
  }

  #beepsLoading {
    padding: 40px;
  }

  #beepsLoading i {
    font-size: 40px;
  }
</style>