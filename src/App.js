import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import RadioButtons from './RadioDes';

export default function App() {
  return (
    <div>
      <div>
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
          <Card>
            <div>
              <h2 className="Head">Questionnaire Detail</h2>
              <input></input>
            </div>
          </Card>
          <hr />
        </div>
        <Card>
          <div className="form-group">
            <h2 className="questionNumber">Question1</h2>
            <input type="text" className="form-control" name="question" autocomplete="off" />
          </div>
          <div>
            <RadioButtons></RadioButtons>
          </div>
          <div>
            <RadioButtons></RadioButtons>
          </div>
          <h5 className="add choice">Add Choice</h5>
          <hr />
          <h5 className="dubplicate,delete">DUBPLICATE,DELETE</h5>
        </Card>
      </div>
    </div>
  );
}
