import {createSlice} from "@reduxjs/toolkit";
import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../../utils/fuelSavings';

const initialState = {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
    }
}

const fuelSavingsSlice = createSlice({
    name: "fuelSavings",
    initialState,
    reducers: {
        saveFuelSavings(state, action) {
            // For this example, just simulating a save by changing date modified.
            // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
            state.dateModified = action.payload.dateModified;
        },
        calculateFuelSavings(state, action) {
            const {fieldName, value, dateModified} = action.payload;

            state[fieldName] = value;
            state.necessaryDataIsProvidedToCalculateSavings = necessaryDataIsProvidedToCalculateSavings(state);
            state.dateModified = dateModified;

            if(state.necessaryDataIsProvidedToCalculateSavings) {
                state.savings = calculateSavings(state);
            }
        }
    }
})

export const {saveFuelSavings, calculateFuelSavings} = fuelSavingsSlice.actions;

export default fuelSavingsSlice.reducer;