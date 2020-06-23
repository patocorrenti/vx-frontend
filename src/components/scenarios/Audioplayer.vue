<template>
  <div v-if="audio">
    <audio controls>
      <source :src="audio" type="audio/ogg">
    </audio>
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