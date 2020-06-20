<template>
  <section class="scenarios-section">
    <ScenariosList :scenarios="scenarios"/>
    <ScenariosView :scenario="content"/>
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
      return this.currentProject.scenarios
    } 
  },
  data: () => ({
    content: {
      name: 'User Scenario 02',
      updated: '02/04/2020',
      items: [
        {
          type: 'SCENARIO SETUP',
          content: 'Account Linked User (AU) invokes HBSC for the first time, hears welcome message, states Voice PIN successfully, has 1 of each account type available (credit, checking, savings), asks to hear balance and hears balance, is asked if they want to hear other balances, declines and exits skill'
        },
        {
          type: 'USER',
          content: 'Alexa, Open HSBC'
        },
        {
          type: 'SCENARIO SETUP',
          content: 'Account Linked User (AU) invokes HBSC for the first time, hears welcome message, states Voice PIN successfully, has 1 of each account type available (credit, checking, savings), asks to hear balance and hears balance, is asked if they want to hear other balances, declines and exits skill'
        },
        {
          type: 'SCENARIO SETUP',
          content: 'Account Linked User (AU) invokes HBSC for the first time, hears welcome message, states Voice PIN successfully, has 1 of each account type available (credit, checking, savings), asks to hear balance and hears balance, is asked if they want to hear other balances, declines and exits skill'
        },
        {
          type: 'SCENARIO SETUP',
          content: 'Account Linked User (AU) invokes HBSC for the first time, hears welcome message, states Voice PIN successfully, has 1 of each account type available (credit, checking, savings), asks to hear balance and hears balance, is asked if they want to hear other balances, declines and exits skill'
        },
        {
          type: 'SCENARIO SETUP',
          content: 'Account Linked User (AU) invokes HBSC for the first time, hears welcome message, states Voice PIN successfully, has 1 of each account type available (credit, checking, savings), asks to hear balance and hears balance, is asked if they want to hear other balances, declines and exits skill'
        },
        {
          type: 'SCENARIO SETUP',
          content: 'Account Linked User (AU) invokes HBSC for the first time, hears welcome message, states Voice PIN successfully, has 1 of each account type available (credit, checking, savings), asks to hear balance and hears balance, is asked if they want to hear other balances, declines and exits skill'
        },
      ]
    },
  }),
}
</script>

<style lang="scss">
.scenarios-section {
  display: flex;
}
</style>