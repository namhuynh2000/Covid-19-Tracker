import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { Typography } from '@material-ui/core'
import moment from "moment";
import 'moment/locale/vi'
import { sortBy } from "lodash";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { getCountries, getReportByCountry } from "./apis";
import '@fontsource/roboto'

moment.locale('vi')


function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState('')
    const [report, setReport] = useState([])

    useEffect(() => {
        getCountries()
            .then(res => {
                const countries = sortBy(res.data, 'Country')
                setCountries(countries);
                setSelectedCountryId('vn');
            })
    }, [])

    const handleOnChange = (e) => {
        setSelectedCountryId(e.target.value)
    }

    useEffect(() => {
        if (selectedCountryId) {
            const { Slug } = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId)

            //call api
            getReportByCountry(Slug)
                .then(res => {
                    res.data.pop()
                    setReport(res.data)
                })
        }
    }, [countries, selectedCountryId])

    return (
        <Container className="App" style={{marginTop: 20}}>
            <Typography variant="h2" component='h2'>
                Số liệu COVID-19
            </Typography>
            <Typography>
                {moment().format('LLL')}
            </Typography>
            <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId}></CountrySelector>
            <Highlight report={report}></Highlight>
            <Summary report={report} selectedCountryId={selectedCountryId}></Summary>
        </Container>
    );
}

export default App;
