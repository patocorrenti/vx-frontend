<template>
  <div v-if="audio" class="audio-player">
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
.audio-player {
  margin: 10px auto 0;

  &:focus {
    outline: none;
    border: none;
  }
  @media (min-width: $breakpoint_movile_large) {
    margin: 0 auto;
  }
}
</style>