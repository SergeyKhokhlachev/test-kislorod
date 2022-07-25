<template>
  <form class="order-form">
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">Город получения</h3>
      <fve-field-location
        placeholder="Населенный пункт"
        required
        v-model="form.locality"
      />
    </fieldset>
    <fieldset class="order-form__fieldset">
      <div class="order-form__box">
        <h3 class="sub-title">Данные получателя</h3>
        <span class="link" @click="isLegal = !isLegal">{{ personTitle }}</span>
      </div>
      <transition name="fade">
        <div v-show="!isLegal" class="order-form__tab">
          <fve-field-text
            placeholder="Имя и Фамилия по паспорту"
            describe="Полные фамилия, имя и отчество могут потребоваться при получении заказа"
            required
            v-model="form.individual.name"
          />
          <div class="order-form__row">
            <div class="order-form__col order-form__col--half">
              <fve-field-email
                placeholder="Электронная почта"
                required
                v-model="form.individual.email"
              />
            </div>
            <div class="order-form__col order-form__col--half">
              <fve-field-phone
                placeholder="Номер телефона"
                describe="Для согласования времени доставки"
                required
                v-model="form.individual.phone"
              />
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="isLegal" class="order-form__tab">
          <div class="order-form__row">
            <div class="order-form__col order-form__col--half">
              <fve-field-number
                placeholder="ИНН"
                required
                v-model="form.legal.inn"
              />
            </div>
          </div>
          <fve-field-text
            placeholder="Название организации"
            required
            v-model="form.legal.name"
          />
          <fve-field-text
            placeholder="Контактное лицо"
            required
            v-model="form.legal.contact"
          />
          <div class="order-form__row">
            <div class="order-form__col order-form__col--half">
              <fve-field-email
                placeholder="Электронная почта"
                required
                v-model="form.legal.email"
              />
            </div>
            <div class="order-form__col order-form__col--half">
              <fve-field-phone
                placeholder="Номер телефона"
                required
                v-model="form.legal.phone"
              />
            </div>
          </div>
          <fve-field-text
            placeholder="Юридический адрес"
            required
            v-model="form.legal.address"
          />
          <div class="order-form__row">
            <div class="order-form__col order-form__col--half">
              <fve-field-number placeholder="КПП" v-model="form.legal.kpp" />
            </div>
            <div class="order-form__col order-form__col--half">
              <fve-field-number placeholder="ОГРН" v-model="form.legal.ogrn" />
            </div>
          </div>
        </div>
      </transition>
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
      <transition name="fade">
        <div v-show="delivery === 'postal'" class="order-form__tab">
          <fve-field-text
            placeholder="Улица"
            required
            v-model="form.postal.street"
          />
          <div class="order-form__row">
            <div class="order-form__col order-form__col--third">
              <fve-field-text
                placeholder="Дом"
                required
                v-model="form.postal.house"
              />
            </div>
            <div class="order-form__col order-form__col--third">
              <fve-field-text
                placeholder="Квартира"
                required
                v-model="form.postal.flat"
              />
            </div>
            <div class="order-form__col order-form__col--third">
              <fve-field-number
                placeholder="Индекс"
                required
                v-model.number="form.postal.index"
              />
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="delivery === 'courier'" class="order-form__tab">
          <fve-field-text
            placeholder="Улица"
            required
            v-model="form.courier.street"
          />
          <div class="order-form__row">
            <div class="order-form__col order-form__col--third">
              <fve-field-text
                placeholder="Дом"
                required
                v-model="form.courier.house"
              />
            </div>
            <div class="order-form__col order-form__col--third">
              <fve-field-text
                placeholder="Квартира"
                required
                v-model="form.courier.flat"
              />
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="delivery === 'pickup'" class="order-form__tab">
          <local-pickup v-bind="localPickup" />
        </div>
      </transition>
    </fieldset>
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">Способ оплаты</h3>
      <fve-radio value="online" v-model="form.payment">
        <div class="radio-label">
          Банковской картой онлайн
          <span class="radio-label__sub">Скидка 3%</span>
        </div>
      </fve-radio>
      <fve-radio value="cash" v-model="form.payment">
        <div class="radio-label">Наличными при получении</div>
      </fve-radio>
      <fve-radio value="card" v-model="form.payment">
        <div class="radio-label">Банковской картой при получении</div>
      </fve-radio>
    </fieldset>
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">Комментарий к заказу</h3>
      <fve-field-area v-model="form.comment" />
    </fieldset>
  </form>
</template>

<script>
import DeliveryCard from "@components/Module/DeliveryCard";
import LocalPickup from "@components/Module/LocalPickup";

import FveFieldLocation from "@components/FormEll/FveFieldLocation";
import FveFieldText from "@components/FormEll/FveFieldText";
import FveFieldEmail from "@components/FormEll/FveFieldEmail";
import FveFieldPhone from "@components/FormEll/FveFieldPhone";
import FveFieldNumber from "@components/FormEll/FveFieldNumber";
import FveFieldArea from "@components/FormEll/FveFieldArea";
import FveRadio from "@components/FormEll/FveRadio";

export default {
  name: "OrderForm",
  components: {
    DeliveryCard,
    LocalPickup,
    FveFieldLocation,
    FveFieldText,
    FveFieldEmail,
    FveFieldPhone,
    FveFieldNumber,
    FveFieldArea,
    FveRadio,
  },
  data() {
    return {
      isLegal: false,
      delivery: "postal",
      form: {
        locality: "",
        comment: "",
        payment: "online",
        individual: {
          name: "",
          email: "",
          phone: "",
        },
        legal: {
          inn: "",
          name: "",
          contact: "",
          email: "",
          phone: "",
          address: "",
          kpp: "",
          ogrn: "",
        },
        postal: {
          street: "",
          house: "",
          flat: "",
          index: "",
        },
        courier: {
          street: "",
          house: "",
          flat: "",
        },
      },
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
    personTitle() {
      return this.isLegal ? "Физическое лицо" : "Юридическое лицо";
    },
  },
};
</script>

<style lang="scss" scoped>
.order-form {
  &__fieldset {
    margin-bottom: 14px;
    @include respond(screen-md) {
      margin-bottom: 26px;
    }
    @include respond(screen-lg) {
      margin-bottom: 36px;
    }
  }
  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    @include respond(screen-md) {
      margin-bottom: 38px;
    }
    .sub-title {
      margin-bottom: 0;
    }
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
  &__col {
    width: 100%;
    padding: 0 15px;
    &--half {
      @include respond(screen-md) {
        width: 50%;
      }
    }
    &--third {
      @include respond(screen-md) {
        width: 33.33%;
      }
    }
  }
  .fve-field {
    margin-bottom: 16px;
    @include respond(screen-md) {
      margin-bottom: 24px;
    }
  }
  .fve-radio {
    margin-bottom: 20px;
    @include respond(screen-md) {
      margin-bottom: 22px;
    }
  }
  .radio-label {
    font-size: 14px;
    @include respond(screen-md) {
      font-size: 15px;
    }
    &__sub {
      display: block;
      margin-top: 4px;
      color: $text-color--muted;
      font-size: 11px;
      @include respond(screen-md) {
        font-size: 12px;
      }
    }
  }
  .delivery-card {
    margin-bottom: 14px;
    @include respond(screen-md) {
      margin-bottom: 20px;
    }
    @include respond(screen-lg) {
      margin-bottom: 24px;
    }
  }
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
