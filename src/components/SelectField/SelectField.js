import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import './SelectField.css';



const SelectField = (props) => {
  const { label, options, code, onSettingChange } = props;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    onSettingChange(code, selectedValue);
  }


  return (
    <Box mt={1} width="100%" >
      <FormControl size="small" fullWidth>
        <InputLabel sx={{ zIndex: -9999}}>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange} className="select-field">
          {
            label === "Category" && options.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))
          }
          {
            label === "Difficulty" && options.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))
          }
          {
            label === "Type" && options.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))
          }
          {
            label === "Number of Questions" && options.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;