import {mount} from "@vue/test-utils";
import SelectOption from "@/components/atoms/SelectOption.vue";
import ISelectOption from "@/components/atoms/ISelectOption";

describe("SelectOption", () => {
  it("should have label and value", () => {
    const component = mount(SelectOption, {
      propsData: {
        item: { label: "test", value: "test" } as ISelectOption,
      },
    });
    const option = component.find("option").element as HTMLOptionElement;
    expect(option.text).toBe("test");
    expect(option.value).toBe("test");
  });
});
