import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getCountries = createAsyncThunk('countries/getCountries', async () => {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    return res.data
})

const CountrySlice = createSlice({
    name: 'countries',
    initialState: {
        loading:false,
        countries: [],
        error:'',
        selectedCountry:''
    },
    reducers: {
        modifCountry: (state, action) => {
            state.selectedCountry = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCountries.fulfilled, (state, action) => {
            state.countries = action.payload
            state.loading=false
        })
        builder.addCase(getCountries.pending, (state, action) => {
            state.loading=true
        })
        builder.addCase(getCountries.rejected, (state, action) => {
            state.loading=false
            state.error= action.payload
        })

    }
}
)

export const {modifCountry} = CountrySlice.actions
export default CountrySlice.reducer