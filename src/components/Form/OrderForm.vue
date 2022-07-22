<template>
  <form class="order-form">
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">Город получения</h3>
    </fieldset>
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">Данные получателя</h3>
    </fieldset>
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">Способ доставки</h3>
      <delivery-card
        v-for="item in deliveryList"
        v-bind="item"
        @click="delivery = item.type"
        :class="{ active: delivery === item.type }"
        :key="item.id"
      />
    </fieldset>
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">{{ deliveryTitle }}</h3>
      <local-pickup v-bind="localPickup" />
    </fieldset>
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">Способ оплаты</h3>
    </fieldset>
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">Комментарий к заказу</h3>
    </fieldset>
  </form>
</template>

<script>
import DeliveryCard from "@components/Module/DeliveryCard";
import LocalPickup from "@components/Module/LocalPickup";

export default {
  name: "OrderForm",
  components: {
    DeliveryCard,
    LocalPickup,
  },
  data() {
    return {
      delivery: "postal",
      deliveryList: [
        {
          id: 1,
          type: "postal",
          name: "Почтой России",
          text: "В ближайшее отделение почты России",
          date: "с 25.02",
          coast: "199 руб.",
        },
        {
          id: 2,
          type: "courier",
          name: "Курьером",
          text: "До дверей в удобное для вас время",
          date: "Завтра",
          coast: "299 руб.",
        },
        {
          id: 3,
          type: "pickup",
          name: "Пункт выдачи",
          text: "в 32 пункта выдачи",
          date: "Завтра",
          coast: "Бесплатно",
        },
      ],
      localPickup: {
        address: "Чебоксары, Тракторостроителей пр-кт, д. 9",
        date: "Можно забрать в понедельник, 10 февраля",
        working: "Ежедневно 9:00-20:00",
      },
    };
  },
  computed: {
    deliveryTitle() {
      return this.delivery === "pickup"
        ? "Выбранный пункт самовывоза"
        : "Адрес доставки";
    },
  },
};
</script>

<style lang="scss" scoped>
.order-form {
  &__fieldset {
    margin-bottom: 60px;
  }
  .delivery-card {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
