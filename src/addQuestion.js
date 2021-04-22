import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

export default function AddQuestion() {
  return (
    <Card>
      <div>
        <h2 className="Head">Question</h2>
        <TextField required id="standard-required" label="Question" defaultValue="Question"></TextField>
      </div>
    </Card>
  );
}
