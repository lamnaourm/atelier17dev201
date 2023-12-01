import React from 'react'
import { useSelector } from 'react-redux'

export default function DetailsCountry() {

  let selectedc = useSelector(state => state.countries.selectedCountry)
  let countries = useSelector(state => state.countries.countries)
  const country = countries.find(c => c.name.common == selectedc)
  return (
    <div>
      {country && <img src={country.flags.png} alt="" srcset="" />}
    </div>
  )
}
