import {getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import {Store} from "vuex";

export interface IStaticModuleState {
  firstName: string;
  lastName: string;
}

@Module({ dynamic: false, namespaced: true, name: "staticModule" })
export default class StaticModule extends VuexModule implements IStaticModuleState {
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

export const getStaticModule = (store: Store<any>) => getModule(StaticModule, store);
