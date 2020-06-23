<template functional>
  <div v-if="props.status !== 'pending'" class="status" :class="props.status">
    <font-awesome-icon v-if="props.status === 'approved'" icon="check-circle" class="icon"/>
    <font-awesome-icon v-else-if="props.status === 'rejected'" icon="times-circle" class="icon"/>
    <span>{{ props.status }}</span>
  </div>
</template>

<style lang="scss">
.status {
  display: inline-block;
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 10px;
  text-transform: uppercase;

  &.approved {
    color: $color-green;
  }
  &.rejected {
    color: $color-red;
  }
  .icon {
    font-size: 1.6rem;
    margin-right: 5px;
  }
}
</style>