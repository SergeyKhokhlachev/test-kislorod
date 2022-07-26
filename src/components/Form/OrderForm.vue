<template>
  <form class="order-form">
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">Город получения</h3>
      <fve-field-location
        :ref="form.locality.ref"
        placeholder="Населенный пункт"
        required
        v-model="form.locality.value"
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
            :ref="form.individual.name.ref"
            placeholder="Имя и Фамилия по паспорту"
            describe="Полные фамилия, имя и отчество могут потребоваться при получении заказа"
            required
            v-model="form.individual.name.value"
          />
          <div class="order-form__row">
            <div class="order-form__col order-form__col--half">
              <fve-field-email
                :ref="form.individual.email.ref"
                placeholder="Электронная почта"
                required
                v-model="form.individual.email.value"
              />
            </div>
            <div class="order-form__col order-form__col--half">
              <fve-field-phone
                :ref="form.individual.phone.ref"
                placeholder="Номер телефона"
                describe="Для согласования времени доставки"
                required
                v-model="form.individual.phone.value"
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
                :ref="form.legal.inn.ref"
                placeholder="ИНН"
                required
                v-model="form.legal.inn.value"
              />
            </div>
          </div>
          <fve-field-text
            :ref="form.legal.name.ref"
            placeholder="Название организации"
            required
            v-model="form.legal.name.value"
          />
          <fve-field-text
            :ref="form.legal.contact.ref"
            placeholder="Контактное лицо"
            required
            v-model="form.legal.contact.value"
          />
          <div class="order-form__row">
            <div class="order-form__col order-form__col--half">
              <fve-field-email
                :ref="form.legal.email.ref"
                placeholder="Электронная почта"
                required
                v-model="form.legal.email.value"
              />
            </div>
            <div class="order-form__col order-form__col--half">
              <fve-field-phone
                :ref="form.legal.phone.ref"
                placeholder="Номер телефона"
                required
                v-model="form.legal.phone.value"
              />
            </div>
          </div>
          <fve-field-text
            :ref="form.legal.address.ref"
            placeholder="Юридический адрес"
            required
            v-model="form.legal.address.value"
          />
          <div class="order-form__row">
            <div class="order-form__col order-form__col--half">
              <fve-field-number
                :ref="form.legal.kpp.ref"
                placeholder="КПП"
                v-model="form.legal.kpp.value"
              />
            </div>
            <div class="order-form__col order-form__col--half">
              <fve-field-number
                :ref="form.legal.ogrn.ref"
                placeholder="ОГРН"
                v-model="form.legal.ogrn.value"
              />
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
            :ref="form.postal.street.ref"
            placeholder="Улица"
            required
            v-model="form.postal.street.value"
          />
          <div class="order-form__row">
            <div class="order-form__col order-form__col--third">
              <fve-field-text
                :ref="form.postal.house.ref"
                placeholder="Дом"
                required
                v-model="form.postal.house.value"
              />
            </div>
            <div class="order-form__col order-form__col--third">
              <fve-field-text
                :ref="form.postal.flat.ref"
                placeholder="Квартира"
                required
                v-model="form.postal.flat.value"
              />
            </div>
            <div class="order-form__col order-form__col--third">
              <fve-field-number
                :ref="form.postal.index.ref"
                placeholder="Индекс"
                required
                v-model.number="form.postal.index.value"
              />
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="delivery === 'courier'" class="order-form__tab">
          <fve-field-text
            :ref="form.courier.street.ref"
            placeholder="Улица"
            required
            v-model="form.courier.street.value"
          />
          <div class="order-form__row">
            <div class="order-form__col order-form__col--third">
              <fve-field-text
                :ref="form.courier.house.ref"
                placeholder="Дом"
                required
                v-model="form.courier.house.value"
              />
            </div>
            <div class="order-form__col order-form__col--third">
              <fve-field-text
                :ref="form.courier.flat.ref"
                placeholder="Квартира"
                required
                v-model="form.courier.flat.value"
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
      <fve-radio value="online" v-model="form.payment.value">
        <div class="radio-label">
          Банковской картой онлайн
          <span class="radio-label__sub">Скидка 3%</span>
        </div>
      </fve-radio>
      <fve-radio value="cash" v-model="form.payment.value">
        <div class="radio-label">Наличными при получении</div>
      </fve-radio>
      <fve-radio value="card" v-model="form.payment.value">
        <div class="radio-label">Банковской картой при получении</div>
      </fve-radio>
    </fieldset>
    <fieldset class="order-form__fieldset">
      <h3 class="sub-title">Комментарий к заказу</h3>
      <fve-field-area :ref="form.comment.ref" v-model="form.comment.value" />
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
        locality: {
          ref: "locality",
          value: "",
        },
        comment: {
          ref: "comment",
          value: "",
        },
        payment: {
          ref: null,
          value: "online",
        },
        individual: {
          name: {
            ref: "nameIndividual",
            value: "",
          },
          email: {
            ref: "emailIndividual",
            value: "",
          },
          phone: {
            ref: "phoneIndividual",
            value: "",
          },
        },
        legal: {
          inn: {
            ref: "innLegal",
            value: "",
          },
          name: {
            ref: "nameLegal",
            value: "",
          },
          contact: {
            ref: "contactLegal",
            value: "",
          },
          email: {
            ref: "emailLegal",
            value: "",
          },
          phone: {
            ref: "phoneLegal",
            value: "",
          },
          address: {
            ref: "addressLegal",
            value: "",
          },
          kpp: {
            ref: "kppLegal",
            value: "",
          },
          ogrn: {
            ref: "ogrnLegal",
            value: "",
          },
        },
        postal: {
          street: {
            ref: "streetPostal",
            value: "",
          },
          house: {
            ref: "housePostal",
            value: "",
          },
          flat: {
            ref: "flatPostal",
            value: "",
          },
          index: {
            ref: "indexPostal",
            value: "",
          },
        },
        courier: {
          street: {
            ref: "streetCourier",
            value: "",
          },
          house: {
            ref: "houseCourier",
            value: "",
          },
          flat: {
            ref: "flatCourier",
            value: "",
          },
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
  methods: {
    formElementPush(elementArr, elementCol) {
      for (const key in elementCol) {
        const element = this.$refs[elementCol[key].ref];
        elementArr.push(element);
      }
    },
    formElementGet() {
      const formElementArr = [this.$refs["locality"]];
      if (this.isLegal) {
        this.formElementPush(formElementArr, this.form.legal);
      } else {
        this.formElementPush(formElementArr, this.form.individual);
      }

      if (this.delivery === "postal") {
        this.formElementPush(formElementArr, this.form.postal);
      } else if (this.delivery === "courier") {
        this.formElementPush(formElementArr, this.form.courier);
      }

      return formElementArr;
    },
    submit() {
      const formElementArr = this.formElementGet();
      formElementArr.forEach((element) => {
        element.validate(element.modelValue);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.order-form {
  &__fieldset {
    margin-bottom: 14px;
    @include respond(screen-md) {
      margin-bottom: 30px;
    }
    @include respond(screen-lg) {
      margin-bottom: 32px;
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
  .local-pickup {
    margin-bottom: 26px;
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
