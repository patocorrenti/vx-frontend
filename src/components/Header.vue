<template>
  <header class="main-header">
    <div class="main-title">
      {{ projectName }}
    </div>
    <Audioplayer />
  </header>
</template>

<script>
import Audioplayer from '@/components/scenarios/Audioplayer.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    Audioplayer
  },
  created () {
    if (!this.$store.state.project.projects.length) {
      this.getProjects();
    }
  },
  computed: {
    ...mapGetters('project', ['projectName'])
  },
  methods: {
    ...mapActions('project', ['getProjects'])
  }
}
</script>

<style lang="scss">
.main-header {
  align-items: center;
  border-bottom: solid 1px $color-line-grey;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0;
  text-align: center;
  width: 100%;

  .main-title {
    font-size: 1.6rem;
    font-weight: bold;
    padding: 0 10px;
    width: 100%;
  }
}
@media (min-width: $breakpoint_movile_large) {
  .main-header {
    .main-title {
      padding: 0 20px;
      width: auto;
    }
  }
}
@media (min-width: $breakpoint_tablet) {
  .main-header {
    height: $desktop__header__height;
    padding: 0;

    .main-title {
      font-size: 2.3rem;
      padding: 0 20px;
      width: auto;
    }
  }
}
</style>