import Vue from "vue";
import Vuex from "vuex";
import { mount } from "@vue/test-utils";
import Company from "@/components/Company.vue";
import CompanyStore from "@/store/index.js";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const store = new Vuex.Store(CompanyStore);
    const wrapper = mount(Company, {
      store
    });
    store.state.Companies.push({ name: "Ayhan" });
    expect(wrapper.vm.Companies).toEqual(["Ayhan"]);
  });
});
