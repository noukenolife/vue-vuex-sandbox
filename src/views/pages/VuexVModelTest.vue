<template>
  <div>
    <h1>Vuex V-Model Test</h1>
    <div>{{ staticModule.fullName }}</div>
    
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import {getStaticModule} from "@/modules/StaticModule";

@Component
export default class VuexVModel extends Vue {

  private staticModule = getStaticModule(this.$store);

  get firstName() { return this.staticModule.firstName; }
  set firstName(value: string) { this.staticModule.setFirstName(value); }
  get lastName() { return this.staticModule.lastName; }
  set lastName(value: string) { this.staticModule.setLastName(value); }
}
</script>
