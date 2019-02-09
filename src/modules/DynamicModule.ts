import {getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store";

export interface IDynamicModuleState {
  firstName: string;
  lastName: string;
}

@Module({ dynamic: true, store, namespaced: true, name: "dynamicModule" })
export default class DynamicModule extends VuexModule implements IDynamicModuleState {
  public firstName: string = "";
  public lastName: string = "";

  @Mutation
  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  @Mutation
  public setLastName(lastName: string) {
    this.lastName = lastName;
  }

  public get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

export const dynamicModule = getModule(DynamicModule);
