<script>
import FveFieldTemplate from "@components/FormEll/Mixin/FveFieldTemplate";

export default {
  components: {
    FveFieldTemplate,
  },
  props: {
    name: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    describe: { type: String, default: "" },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  },
  data() {
    return {
      status: "",
      error: "",
    };
  },
  computed: {
    elementClass() {
      return {
        "is-require": this.required,
        "has-error": this.status === "ERROR",
        "shown-placeholder": this.modelValue === "" || this.modelValue === null,
      };
    },
  },
  methods: {
    getFormElement() {
      return this.value;
    },
    inputField($event) {
      let value = this.prepareValue($event);
      this.validateNotEmpty(value);
      this.$emit("update:modelValue", value);
    },
    validateRequireFormElement(value) {
      if (this.isEmpty(value)) {
        this.error = "Поле обязательно для заполнения";
        this.status = "ERROR";
        return false;
      }
      return true;
    },
    validateFormElement(value) {
      let res = this.validateFunction(value);
      if (res !== "SUCCESS") {
        this.error = res;
        this.status = "ERROR";
        return false;
      }
      return true;
    },
    validateNotEmpty(value) {
      if (!this.isEmpty(value)) {
        let res = this.validateFormElement(value);
        if (!res) {
          return false;
        }
      }
      this.error = "";
      this.status = "";
      return true;
    },
    validate(value) {
      if (this.required) {
        let res = this.validateRequireFormElement(value);
        if (!res) {
          return false;
        }
      }
      if (!this.isEmpty(value)) {
        let res = this.validateFormElement(value);
        if (!res) {
          return false;
        }
      }
      this.error = "";
      this.status = "";
      return true;
    },
  },
};
</script>
