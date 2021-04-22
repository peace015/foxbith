import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <div>
        <GreenRadio
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'C' }}
        />
        <TextField required id="standard-required" label="description" defaultValue="Description"></TextField>
      </div>
      <div>
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'B' }}
        />
        <TextField required id="standard-required" label="description" defaultValue="Description"></TextField>
      </div>
    </div>
  );
}
