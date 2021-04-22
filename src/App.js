import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import RadioButtons from './RadioDes';
import TextField from '@material-ui/core/TextField';

function App() {
  const [inputlist, setInputlist] = useState([{ Description: '' }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputlist];
    list[index][name] = value;
    setInputlist(list);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputlist];
    list.splice(index, 1);
    setInputlist(list);
  };

  const handleAddClick = () => {
    setInputlist([...inputlist, { Description: '' }]);
  };
  return (
    <div className="App">
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
                <TextField required id="standard-required" label="Name" defaultValue="Name"></TextField>
              </div>
            </Card>
            <hr />
          </div>
          
          {inputlist.map((x, i) => {
            return (

          <Card>
            <div className="form-group">
              <h2 className="questionNumber">Question1</h2>
              <TextField required id="standard-required" label="Question" defaultValue="Question"></TextField>
            </div>
          </Card>
          {inputlist.map((x, i) => {
            return (
              <Card>
                <div>
                  <RadioButtons>
                    <input
                      className="ml10"
                      Name="Description"
                      value={x.Description}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </RadioButtons>
                </div>
                <div className="btn-box">
                  {inputlist.length !== 1 && (
                    <button className="mr10" onClick={() => handleRemoveClick(i)}>
                      Remove
                    </button>
                  )}
                  {inputlist.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                </div>
                <hr />
              </Card>
            );
          })}
           
<Card>
           <div className="btn-box">
                  {inputlist.length !== 1 && (
                    <button className="mr10" onClick={() => handleRemoveClick(i)}>
                      DELETE
                    </button>
                  )}
                  {inputlist.length - 1 === i && <button onClick={handleAddClick}>DUPLICATE</button>}
                </div>
                </Card>
            );
        })}
 
       
        </div>
      </div>
    </div>
  );
}

export default App;
