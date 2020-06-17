<template>
  <article class="scenarios-view">
    <header>
      <h1>{{ scenario.name }}</h1>
      <div>Updated {{ scenario.updated }}</div>
    </header>
    <ol>
      <li v-for="(item, key) in scenario.items" :key="key">
        {{ item.type }}
        {{ item.content }}
      </li>
      <li>
        {{ scenario.name }} was updated on {{ scenario.updated }}
        <button type="button">Approve</button>
        <button type="button">Reject</button>
      </li>
    </ol>
  </article>
</template>

<script>
export default {
  name: 'Scenarios View',
  props: ['scenario']
}
</script>

<style lang="scss">
.scenarios-view {
  flex: 1 1 0;
  height: $desktop__main-content__height;
  overflow: auto;
}
</style>