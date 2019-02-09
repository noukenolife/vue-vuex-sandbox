import Vue from "vue";
import Vuex from "vuex";
import {IDynamicModuleState} from "@/modules/DynamicModule";
import StaticModule, {IStaticModuleState} from "@/modules/StaticModule";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

interface IState {
  dynamicModule: IDynamicModuleState;
  staticModule: IStaticModuleState;
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = new Vuex.Store<IState>({
  modules: {
    staticModule: StaticModule,
  },
  plugins: [vuexLocal.plugin],
});

export default store;
