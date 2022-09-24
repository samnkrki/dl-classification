import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';

export function SelectComponent({ options = [], onChange, value, label }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 100 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={value} onChange={onChange} autoWidth label={label}>
        {options.map((eachOption, index) => {
          return (
            <MenuItem key={eachOption.value} value={eachOption.value}>
              {eachOption.label}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>Please select one of the categories</FormHelperText>
    </FormControl>
  );
}

SelectComponent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
};
