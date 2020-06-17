<template>
  <nav class="scenarios-list">
    <ul>
      <li v-for="(scenario, key) in scenarios" :key="key">
        <article>
          <header>
            <h4>{{ scenario.name }}</h4>
            <div>{{ scenario.status }}</div>
          </header>
          <p>{{ scenario.content }}</p>
        </article>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Scenarios List',
  props: ['scenarios']
}
</script>

<style lang="scss">
.scenarios-list {
  height: $desktop__main-content__height;
  overflow: auto;
  width: 30%;

  > ul {
    @include reset-list;
    
    > li {
      border-bottom: solid 1px $color-line-grey;
    }
  }
}
</style>