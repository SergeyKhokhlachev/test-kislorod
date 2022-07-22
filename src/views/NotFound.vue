<template>
  <div class="page-not-found">
    <div class="page-not-found__content">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <router-link to="/">Перейти на главную?</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
.page-not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &__content {
    margin-bottom: 100px;
    text-align: center;
  }
  h1 {
    font-size: 4.2rem;
    font-weight: bold;
  }
  p {
    margin-bottom: 30px;
    font-size: 1.8rem;
  }
}
</style>
