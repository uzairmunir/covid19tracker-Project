import React,{useState,useEffect} from 'react'
import {countriesData} from './Api'
import {FormControl,NativeSelect} from '@material-ui/core'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
       const fetchCountriesApi=async()=>{
           setFetchedCountries(await countriesData());
       }
       fetchCountriesApi();
    },[setFetchedCountries]);
    console.log(fetchedCountries[0])
    return (
        <div>
          <FormControl>
              <NativeSelect defaultValue=" " onChange={(e) => handleCountryChange(e.target.value)}>
                  <option  value="">Global</option>
                  {
                      fetchedCountries.map((country,index)=>
                  <option value={country} key={index}>{country}</option>
                      )
                  }
              </NativeSelect>
          </FormControl>
        </div>
    )
}

export default CountryPicker
