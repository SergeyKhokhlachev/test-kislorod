<template>
  <fve-field-template>
    <input
      :type="type"
      :name="name"
      :value="modelValue"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      autocomplete="off"
      v-maska="maska"
      @input="inputField"
      @change="inputField"
      @keypress.enter="$emit('keypress-enter')"
    />
  </fve-field-template>
</template>

<script>
import FveFieldMixin from "@components/FormEll/Mixin/FveFieldMixin";

export default {
  name: "FveFieldPhone",
  mixins: [FveFieldMixin],
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      type: "tel",
      maska: "+7 (###) ###-##-##",
    };
  },
  methods: {
    prepareValue($event) {
      return $event.target.value;
    },
    isEmpty(value) {
      return value === "";
    },
    validateFunction(str) {
      if (str.length < this.maska.length) {
        return "проверьте номер введенного телефона";
      }
      return "SUCCESS";
    },
  },
};
</script>
