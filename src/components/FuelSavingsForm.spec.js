import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import FuelSavingsForm from './FuelSavingsForm';
import FuelSavingsTextInput from './FuelSavingsTextInput';
import FuelSavingsResults from './FuelSavingsResults';

describe('<FuelSavingsForm />', () => {
  it('should contain <FuelSavingsTextInput /> components', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = () => {};
    const fuelSavings = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);
    const allInputs = wrapper.find(FuelSavingsTextInput);

    expect(allInputs).to.be.length(5);
    expect(allInputs.at(0).props().name).to.equal('newMpg');
    expect(allInputs.at(0).props().value).to.equal(fuelSavings.newMpg);
    expect(allInputs.at(1).props().name).to.equal('tradeMpg');
    expect(allInputs.at(1).props().value).to.equal(fuelSavings.tradeMpg);
    expect(allInputs.at(2).props().name).to.equal('newPpg');
    expect(allInputs.at(2).props().value).to.equal(fuelSavings.newPpg);
    expect(allInputs.at(3).props().name).to.equal('tradePpg');
    expect(allInputs.at(3).props().value).to.equal(fuelSavings.tradePpg);
    expect(allInputs.at(4).props().name).to.equal('milesDriven');
    expect(allInputs.at(4).props().value).to.equal(fuelSavings.milesDriven);
  });

  it('should contain options to change miles driven timeframe', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = () => {};
    const fuelSavings = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);
    const expectedOption1 = '<option value="week">Week</option>';
    const expectedOption2 = '<option value="month">Month</option>';
    const expectedOption3 = '<option value="year">Year</option>';

    expect(wrapper.find('select').childAt(0).html()).to.equal(expectedOption1);
    expect(wrapper.find('select').childAt(1).html()).to.equal(expectedOption2);
    expect(wrapper.find('select').childAt(2).html()).to.equal(expectedOption3);
  });

  it('should contain <FuelSavingsResults /> when necessary conditions are met', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = () => {};
    const fuelSavings = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: true,
      savings: {
        monthly: 10,
        annual: 120,
        threeYear: 360
      }
    };

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);
    const expected = <FuelSavingsResults savings={fuelSavings.savings}/>;

    expect(wrapper.contains(expected)).to.be.true;
  });

  it('should not contain <FuelSavingsResults /> when necessary conditions are not met', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = () => {};
    const fuelSavings = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);
    const expected = <FuelSavingsResults savings={fuelSavings.savings}/>;

    expect(wrapper.contains(expected)).to.be.false;
  });

  it('should handle form submit', () => {
    const saveFuelSavings = sinon.spy();
    const calculateFuelSavings = () => {};
    const fuelSavings = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);

    expect(saveFuelSavings.calledOnce).to.be.false;
    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveFuelSavings.calledOnce).to.be.true;
  });

  it('should submit appState', () => {
    const saveFuelSavings = sinon.spy();
    const calculateFuelSavings = () => {};
    const fuelSavings = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);

    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveFuelSavings.args[0][0]).to.equal(fuelSavings);
  });


  it('should calculate fuel savings on text input change', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = sinon.spy();
    const fuelSavings = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);

    expect(calculateFuelSavings.calledOnce).to.be.false;
    wrapper.find(FuelSavingsTextInput).first().simulate('change');
    expect(calculateFuelSavings.calledOnce).to.be.true;
  });

  it('should calculate fuel savings on miles driven timeframe change', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = sinon.spy();
    const fuelSavings = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);

    expect(calculateFuelSavings.calledOnce).to.be.false;
    wrapper.find('select').simulate('change', {target: {value: 'year'}});
    expect(calculateFuelSavings.calledOnce).to.be.true;
    expect(calculateFuelSavings.args[0][2]).to.equal('year');
  });
});
