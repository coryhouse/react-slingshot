import * as types from '../constants/ActionTypes';

export function saveFuelSavings(settings) {
	return { type: types.SAVE_FUEL_SAVINGS, settings };
}

export function calculateFuelSavings(settings, fieldName, value) {
	return { type: types.CALCULATE_FUEL_SAVINGS, settings, fieldName, value };
}