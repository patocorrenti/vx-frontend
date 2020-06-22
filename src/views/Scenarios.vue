<template>
  <section class="scenarios-section">
    <ScenariosList :scenarios="scenarios"/>
    <ScenariosView/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ScenariosList from '@/components/scenarios/List.vue';
import ScenariosView from '@/components/scenarios/View.vue';

export default {
  name: 'Scenarios',
  components: {
    ScenariosList, ScenariosView
  },
  computed: {
    ...mapGetters('project', ['currentProject']),
    scenarios () {
      return this.currentProject ? this.currentProject.scenarios : false
    } 
  },
}
</script>

<style lang="scss">
.scenarios-section {
  display: flex;
}
</style>