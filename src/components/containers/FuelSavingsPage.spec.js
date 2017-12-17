import React from "react";
import { shallow } from "enzyme";
import * as actions from "../../actions/fuelSavingsActions";
import ConnectedFuelSavingsPage, { FuelSavingsPage } from "./FuelSavingsPage";
import FuelSavingsForm from "../FuelSavingsForm";
import { fuelSavings } from "../../types/index";

describe("<FuelSavingsPage />", () => {
  it("should contain <FuelSavingsForm />", () => {
    const actions = {
      saveFuelSavings: () => {},
      calculateFuelSavings: () => {}
    };
    const fuelSavings = {};
    const wrapper = shallow(
      <FuelSavingsPage actions={actions} fuelSavings={fuelSavings} />
    );

    expect(wrapper.find(FuelSavingsForm).length).toEqual(1);
  });

  // App integration test
  it("should display results when populated", () => {
    const wrapper = shallow(
      <ConnectedFuelSavingsPage actions={actions} fuelSavings={fuelSavings} />
    ).dive(); // Use dive to get reference to child component.
    expect(wrapper.find(".results")).toBe(true);
  });
});
