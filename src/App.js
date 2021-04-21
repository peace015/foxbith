import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Questionnaire from './Questionnaire';

export default function App() {
  return (
    <div>
      <Card>
        <div>
          <h1 className="headline">Foxbith Questionnaire</h1>
          <hr />

          <CardActions>
            <Button size="small" color="primary">
              Cancel
            </Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </CardActions>
        </div>
      </Card>
      <Questionnaire></Questionnaire>
    </div>
  );
}
