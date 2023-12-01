import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modifCountry } from '../redux/CountrySlice'

export default function ListCountries() {

    const dispatch = useDispatch()
    let countries = useSelector(state => state.countries.countries)
    let selectedc = useSelector(state => state.countries.selectedCountry)

    countries = [...countries].sort((a,b) => a.name.official.localeCompare(b.name.official))
    
    return (
        <div>
            <select name="country" id="country" value={selectedc} onChange={(e) => dispatch(modifCountry(e.target.value))}>
                {
                    countries.map(c =>
                        <option key={c.name.common} value={c.name.common}>{c.name.official}</option>
                    )
                }
            </select>


        </div>
    )
}
