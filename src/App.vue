<template>
  <div class="page-content">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.page-content {
  padding: 54px 0 60px;
  @include respond(screen-md) {
    padding: 60px 0 120px;
  }
  @include respond(screen-lg) {
    padding: 100px 0 150px;
  }
}
</style>
