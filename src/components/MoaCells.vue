<template>
  <div>
    <div class="cells-title" v-if="title || $slots['cells-title']">
      <slot name="cells-title">{{ title }}</slot>
    </div>

    <div class="cells">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoaCells",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>