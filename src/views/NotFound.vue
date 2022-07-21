<template>
  <div class="page-not-found">
    <div class="page-not-found__content">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <router-link to="/" class="link">Перейти на главную?</router-link>
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
  height: 100vh;
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
  .link {
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
  }
}
</style>
