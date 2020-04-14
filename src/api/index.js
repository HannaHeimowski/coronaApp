/* import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const {data} = await axios.get(url);
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
    return modifiedData;
    } catch (error) {

    }
}
 */
//________________________________________________

import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            // recovered: dailyData.recovered.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

/* export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/recovered`);
        console.log(data);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            recovered: dailyData.recovered.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
} */

export const fetchDailyRecoveredData = async () => {
  try {
    const { data } = await axios.get(`${url}/recovered`);
    console.log(data);
    return data.map(({ recovered }) => ({ recovered: recovered.total }));
  } catch (error) {
    return error;
  }
};



/* export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(data);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
}; */



/* export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/recovered`);
      return data.map(({ confirmed, deaths, recovered, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, recovered: recovered.total, date }));
    } catch (error) {
      return error;
    }
  }; */

export const fetchCountries = async () => {
    try {
        const { data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
        
    } catch (error) {
        console.log(error);
    }
}