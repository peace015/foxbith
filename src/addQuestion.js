import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

export default function addQuestion() {
  return (
    <Card>
      <div>
        <h2 className="Head">Question1</h2>
        <FormControl component="fieldset">
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel value="Description" control={<Radio />} label="Description" />
            <TextField required id="standard-required" label="Required" defaultValue="Description"></TextField>
          </RadioGroup>
        </FormControl>
      </div>
    </Card>
  );
}
