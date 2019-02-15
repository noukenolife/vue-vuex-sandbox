<template>
  <option :value="item.value">{{ item.label }}</option>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";
  import ISelectOption from "./ISelectOption";
  
  @Component
  export default class SelectOption extends Vue {
    @Prop() public item!: ISelectOption;
  }
</script>
