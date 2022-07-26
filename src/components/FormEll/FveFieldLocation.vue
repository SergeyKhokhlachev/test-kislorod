<template>
  <fve-field-template>
    <div :class="['fve-autocomplete', { shown: isShown }]">
      <perfect-scrollbar :watchOptions="true">
        <div
          v-for="item in items"
          class="fve-autocomplete__item"
          @click="selectItem(item.value)"
          :key="item.value"
        >
          {{ item.value }}
        </div>
        <div v-show="!items[0]" class="fve-autocomplete__empty">Нет данных</div>
      </perfect-scrollbar>
    </div>
    <input
      :type="type"
      :name="name"
      :value="modelValue"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      autocomplete="off"
      @input="inputField"
      @change="inputField"
      @focus="onFocus"
      @blur="onBlur"
      @keypress.enter="$emit('keypress-enter')"
    />
  </fve-field-template>
</template>

<script>
import FveFieldMixin from "@components/FormEll/Mixin/FveFieldMixin";

export default {
  name: "FveFieldLocation",
  mixins: [FveFieldMixin],
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      type: "text",
      isShown: false,
      items: [],
    };
  },
  computed: {},
  methods: {
    prepareValue($event) {
      return $event.target.value;
    },
    isEmpty(value) {
      return value === "";
    },
    // eslint-disable-next-line
    validateFunction(str) {
      return "SUCCESS";
    },
    inputField($event) {
      let value = this.prepareValue($event);
      this.validateNotEmpty(value);
      this.request(value);
      this.isShown = true;
      this.$emit("update:modelValue", value);
    },
    selectItem(value) {
      this.isShown = false;
      this.$emit("update:modelValue", value);
    },
    onFocus() {
      this.isShown = true;
    },
    onBlur() {
      setTimeout(() => (this.isShown = false), 150);
    },
    request(query) {
      const url =
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
      const token = "e0f8448c2cc8f36f1b5d4e9bf6dd08e5d725ac60";

      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
        body: JSON.stringify({ query: query }),
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((result) => {
          this.items = result.suggestions;
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style lang="scss" scoped>
.fve-autocomplete {
  position: absolute;
  left: 0;
  top: 52px;
  width: 100%;
  padding: 6px 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px 1px rgba($color: $text-color--muted, $alpha: 0.25);
  opacity: 0;
  visibility: hidden;
  z-index: 15;
  &.shown {
    opacity: 1;
    visibility: visible;
  }
  &__item {
    padding: 4px 0;
    color: $text-color--muted;
    @include hover-supported() {
      color: $color-main;
      cursor: pointer;
    }
  }
  &__empty {
    color: $text-color--muted;
  }
}

:deep(.ps) {
  max-height: 140px;
}
</style>
