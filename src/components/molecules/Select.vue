<template>
  <select v-model="_value">
    <SelectOption :item="{ label: 'Choose', value: undefined }"></SelectOption>
    <SelectOption v-for="option in options" :item="option"></SelectOption>
  </select>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit} from "vue-property-decorator";
  import ISelectOption from '../atoms/ISelectOption';
  import SelectOption from '../atoms/SelectOption.vue';
  
  @Component({
    components: {
      SelectOption
    }
  })
  export default class SelectBox extends Vue {
    @Prop({ default: [] }) public options!: ISelectOption[];
    @Prop({ default: undefined }) public value: string | undefined;
  
    @Emit() public input(value: string | undefined) { return; }

    public get _value(): string | undefined { return this.value; }
    public set _value(value: string | undefined) { this.input(value); }
  }
</script>
