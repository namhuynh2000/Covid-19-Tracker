import axios from "axios";

export const getCountries = async () => {
    return await axios.get('https://api.covid19api.com/countries')
}

export const getReportByCountry = async (country) => {
    return await axios.get(`https://api.covid19api.com/live/country/${country}`)
}