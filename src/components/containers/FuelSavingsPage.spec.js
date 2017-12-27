import React from "react";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import ConnectedFuelSavingsPage, { FuelSavingsPage } from "./FuelSavingsPage";
import FuelSavingsForm from "../FuelSavingsForm";
import initialState from "../../reducers/initialState";

describe("<FuelSavingsPage />", () => {
  const actions = {
    saveFuelSavings: jest.fn(),
    calculateFuelSavings: jest.fn()
  };

  it("should contain <FuelSavingsForm />", () => {
    const wrapper = shallow(
      <FuelSavingsPage
        actions={actions}
        fuelSavings={initialState.fuelSavings}
      />
    );

    expect(wrapper.find(FuelSavingsForm).length).toEqual(1);
  });

  it("calls saveFuelSavings upon clicking save", () => {
    const wrapper = mount(
      <FuelSavingsPage
        actions={actions}
        fuelSavings={initialState.fuelSavings}
      />
    );

    const save = wrapper.find('input[type="submit"]');
    save.simulate("click");

    expect(actions.saveFuelSavings).toHaveBeenCalledWith(
      initialState.fuelSavings
    );
  });

  it("calls calculateFuelSavings upon changing a field", () => {
    const wrapper = mount(
      <FuelSavingsPage
        actions={actions}
        fuelSavings={initialState.fuelSavings}
      />
    );
    const name = "newMpg";
    const value = 10;

    const input = wrapper.find('input[name="newMpg"]');
    input.simulate("change", { target: { name, value } });

    expect(actions.calculateFuelSavings).toHaveBeenCalledWith(
      initialState.fuelSavings,
      name,
      value
    );
  });

  it("should match snapshot", () => {
    const store = configureMockStore()(initialState);
    const component = create(
      <Provider store={store}>
        <ConnectedFuelSavingsPage />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
