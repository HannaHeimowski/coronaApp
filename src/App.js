import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/index';
// import cImage from './images/logo.png'

import styles from './App.module.css';
 
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country });
        // console.log(fetchedData);
        // console.log(country);
    }



    render() {
        const { data, country} = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.head}>
                    {/* <img className={styles.cImage} src={cImage} alt="Logo"/> */}
                    <p className={styles.top}>COVID-19</p>
                    <a href="https://en.wikipedia.org/wiki/Coronaviridae" target="_blank" rel="noopener noreferrer" className={styles.wiki}>what is covid-19 ?
                        <span className={styles.linked}> (read here more)</span>
                    </a>
                </div>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;
