import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CountrySlice from "./CountrySlice";
import UniversitySlice from "./UniversitySlice";

const reducer = combineReducers({
    countries: CountrySlice,
    universities: UniversitySlice
})

const store = configureStore({ reducer })

export default store