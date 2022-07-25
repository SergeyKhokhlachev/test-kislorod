<script>
import FveFieldText from "@components/FormEll/FveFieldText";

export default {
  name: "FveFieldNumber",
  mixins: [FveFieldText],
  data() {
    return {
      type: "text",
    };
  },
  methods: {
    prepareValue($event) {
      let value = $event.target.value;
      if (value === "") {
        return null;
      }
      let floatValue = parseFloat(value);
      if (value !== floatValue.toString()) {
        return value;
      }
      return floatValue;
    },
    isEmpty(value) {
      return value === "" || value === null;
    },
    // eslint-disable-next-line
    validateFunction(str) {
      if (typeof str === "string") {
        return "Число введено не корректно";
      }
      console.log(str.toString().length);
      return "SUCCESS";
    },
  },
};
</script>
