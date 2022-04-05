<template>
  <div
    :class="[
      'cell',
      { cell__access: access && permiss === 'write' && !readonly },
      { cell__required: required && permiss === 'write' },
      { cell__column: column && permiss === 'write' },
    ]"
  >
    <div :class="column && permiss === 'write' ? 'cell-header' : 'cell-label'">
      <slot name="cell-label">
        <div>{{ label }}</div>
        <div class="cell-desc" v-if="desc">
          {{ desc }}
        </div>
      </slot>
    </div>
    <div class="cell-body">
      <div v-if="permiss === 'read'" class="cell-body-read">
        <slot name="cell-body">
          <div>{{ value }}</div>
        </slot>
      </div>
      <div v-else-if="permiss === 'write'" class="cell-body-write">
        <slot name="cell-body">
          <div v-if="readonly">{{ value }}</div>
          <div v-else-if="type === 'textarea'">
            <textarea
              class="cell-body__inner"
              :value="value"
              :readonly="readonly"
              v-bind="$attrs"
              v-on="inputListeners"
            />
            <div style="color: ccc; font-size: 0.5em; text-align: right">
              {{ value.length }} / {{ $attrs.maxlength }}
            </div>
          </div>
          <div v-else>
            <input
              class="cell-body__inner"
              :type="type"
              :value="value"
              :readonly="access"
              v-bind="$attrs"
              v-on="inputListeners"
            />
          </div>
        </slot>
      </div>
    </div>
    <div class="cell-footer" v-if="!column">
      <slot name="cell-footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoaCell",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    footer: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    access: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      permiss: "",
    };
  },
  computed: {
    inputListeners() {
      return Object.assign({}, this.$listeners, {
        input: (event) => {
          this.$emit("input", event.target.value);
        },
      });
    },
  },
  created() {
    this.permiss =
      this.$attrs.permiss ||
      this.$parent.$attrs.permiss ||
      this.$parent.$parent.$attrs.permiss ||
      "read";
  },
};
</script>