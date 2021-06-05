import React from "react"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectTeachingExperience = ()=>{
    return(
        <FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">Teaching Experience</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Teaching Experience"
        >
          <MenuItem value={'less than 1'}>Less than 1 year</MenuItem>
          <MenuItem value={1}>1 year</MenuItem>
          <MenuItem value={2}>2 years</MenuItem>
          <MenuItem value={3}>3 years</MenuItem>
          <MenuItem value={4}>4 years</MenuItem>
          <MenuItem value={5}>5 years</MenuItem>
          <MenuItem value={'more than 5'}>More than 5 years</MenuItem>
        </Select>
      </FormControl>
    )
}

export default SelectTeachingExperience