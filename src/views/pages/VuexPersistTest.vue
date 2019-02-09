<template>
  <div>
    <h1>Vuex Persist Test</h1>
    <div>Dynamic: {{ dynamic_fullName }}</div>
    <div>Static: {{ static_fullName }}</div>
    
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <button @click="updateModule()">Submit</button>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import {dynamicModule} from "@/modules/DynamicModule";
import {getStaticModule} from "@/modules/StaticModule";

@Component
export default class VuexPersistTest extends Vue {
  private staticModule = getStaticModule(this.$store);

  private firstName: string = "";
  private lastName: string = "";

  get dynamic_fullName() {
    /**
     * Dynamic module fails to restore the data in local storage
     * because its instance gets created and overwrites its properties with default values.
     */
    return dynamicModule.fullName;
  }

  get static_fullName() {
    return this.staticModule.fullName;
  }

  public updateModule() {
    // Dynamic
    dynamicModule.setFirstName(this.firstName);
    dynamicModule.setLastName(this.lastName);

    // Static
    this.staticModule.setFirstName(this.firstName);
    this.staticModule.setLastName(this.lastName);
  }
}
</script>
