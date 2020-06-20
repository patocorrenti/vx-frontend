<template>
  <header class="main-header">
    <div class="main-title">
      PROJECT NAME
    </div>
    <div class="audio-player">
      AUDIO PLAYER
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  created () {
    if (!this.$store.state.project.projects.length) {
      this.$store.dispatch('project/getProjects');
    }
  },
}
</script>

<style lang="scss">
.main-header {
  align-items: center;
  border-bottom: solid 1px $color-line-grey;
  display: flex;
  flex-wrap: wrap;
  height: $desktop__header__height;
  width: 100%;
}
</style>