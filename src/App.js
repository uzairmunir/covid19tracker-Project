import React, { useEffect, useState } from 'react';
import Cards from './components/Cards'
import CountryPicker from './components/CountryPicker'
import Chart from './components/Chart'
import { getData } from './components/Api'
import image from './img/image.png'
import './App.css'

class App extends React.Component {
  state = {
    data: {},
    country: " ",
  }
  async componentDidMount() {
    let fetchedData = await getData();
    console.log(fetchedData)
    this.setState({ data: fetchedData })
  }
  handleCountryChange = async (country) => {
  let fetchedData = await getData(country);
    console.log(fetchedData)
    this.setState({data: fetchedData,country:country})
    
  }
  render() {
    const { data ,country } = this.state;
    return (
      <div className="container">
        <div className="img">
        <img  src={image} alt="covid-19-image"/>
        </div>       
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}



export default App;
