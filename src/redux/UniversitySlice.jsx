import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUniversities = createAsyncThunk('universities/getUniversities', async () => {
    const res = await axios.get('http://universities.hipolabs.com/search?country=');
    return res.data
})

const UniversitySlice = createSlice({
    name: 'universities',
    initialState: {
        universities: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUniversities.fulfilled, (state, action) => {
            state.universities = action.payload
        })
    }
}
)

export default UniversitySlice.reducer