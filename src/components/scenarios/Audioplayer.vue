<template>
  <div v-if="audio">
    <audio controls>
      <source :src="audio" type="audio/ogg">
    </audio>
    <a :href="audio" title="Download audio" target="_blank">Download</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Scenario_Audio_Player',
  computed: {
    ...mapGetters('scenario', ['audio'])
  }
}
</script>

<style lang="scss">
</style>