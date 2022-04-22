import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import HighMaps from "../Charts/HighMaps";
import LineChart from "../Charts/LineChart";

function Summary({ report, selectedCountryId }) {
    const [mapData, setMapData] = useState({})

    useEffect(() => {
        if (selectedCountryId) {
            // import(`@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`)
            //     .then(res => setMapData(res))
        };
    }, [selectedCountryId])

    return (
        <Grid style={{marginTop:10}} container spacing={3}>
            <Grid item sm={8} xs={12}>
                <LineChart data={report}></LineChart>
            </Grid>
            <Grid item sm={8} xs={12}>
                <HighMaps mapData={mapData}></HighMaps>
            </Grid>
        </Grid>
    );
}

export default Summary;
