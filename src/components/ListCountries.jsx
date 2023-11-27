import React from 'react'
import { useSelector } from 'react-redux'

export default function ListCountries() {

    const countries = useSelector(state => state.countries.countries)
    return (
        <div>
            <select name="" id="">
                {
                    countries.map(c =>
                        <option value={c.name.common}>{c.name.official}</option>
                    )
                }
            </select>


        </div>
    )
}
