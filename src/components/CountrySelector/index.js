import {FormControl, FormHelperText, InputLabel, NativeSelect} from "@material-ui/core";


function CountrySelector({ value, handleOnChange, countries}) {
    return (
        <div style={{marginTop:20}} className="CountrySelector">
            <FormControl>
                <InputLabel htmlFor={""} shrink>
                    Quốc gia
                </InputLabel>
                <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }}>
                    {countries.map((country)=>{
                        return <option key={country.ISO2} value={country.ISO2.toLowerCase()}>{country.Country}</option>
                    })}
                </NativeSelect>
                <FormHelperText>Lựa chọn quốc gia</FormHelperText>
            </FormControl>
        </div>
    );
}

export default CountrySelector;
