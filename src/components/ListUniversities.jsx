import React from 'react'
import { useSelector } from 'react-redux'


export default function ListUniversities() {

  let selectedc = useSelector(state => state.countries.selectedCountry)
  let universities = useSelector(state => state.universities.universities)
  const selectuniversities = universities.filter(u => u.country == selectedc)

  return (
    <div>
      {selectuniversities && <h1>{selectuniversities.length}</h1>}
    </div>
  )
}
