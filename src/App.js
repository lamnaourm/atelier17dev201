import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getCountries } from './redux/CountrySlice';
import { getUniversities } from './redux/UniversitySlice';
import ListCountries from './components/ListCountries';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getUniversities())
  }, [])

  return (
    <div className="container">
        <ListCountries />
    </div>
  );
}

export default App;
