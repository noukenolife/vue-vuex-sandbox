import {mount} from "@vue/test-utils";
import ISelectOption from "@/components/atoms/ISelectOption";
import Select from "@/components/molecules/Select.vue";

describe("Select", () => {
  it("should set \"Choose\" when value is undefined", () => {
    const component = mount(Select, {
      propsData: {
        options: [
          { label: "test1", value: "test1" },
        ] as ISelectOption[],
        value: undefined,
      },
    });
    const select = component.find("select").element as HTMLSelectElement;
    expect(select.options[select.selectedIndex].text).toBe("Choose");
  });

  it("should set an item selected when value is set", () => {
    const component = mount(Select, {
      propsData: {
        options: [
          { label: "test1", value: "test1" },
        ] as ISelectOption[],
        value: "test1",
      },
    });
    const select = component.find("select").element as HTMLSelectElement;
    expect(select.options[select.selectedIndex].text).toBe("test1");
  });
});
