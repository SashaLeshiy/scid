<template>
  <div class="scid-main" id="main">
    <scid-header></scid-header>
    <router-view></router-view>
    <scid-footer></scid-footer>
  </div>
</template>

<script>
import ScidHeader from '@/components/ScidHeader/ScidHeader.vue';
import ScidFooter from './components/ ScidFooter/ScidFooter.vue';

export default {
  name: 'App',
  components: {
    ScidHeader,
    ScidFooter,
  },

  data() {
    return {
      isMobileOpen: false,
    };
  },

  provide() {
    return {
      toggleModal() {
        this.isModalOpen = !this.isModalOpen;
      },
    };
  },

};
</script>

<style lang="scss">
.scid-main {
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
