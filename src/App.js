import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import RadioButtons from './RadioDes';

import {
  AppBar,
  Toolbar,
  Typography,
  Divider,
  Button,
  Box,
  Card,
  CardContent,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';

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
                <div>
                  <AppBar position="absolute" color="inherit">
                    <Toolbar>
                      <Typography variant="h5">Foxbith Queestionaire</Typography>
                    </Toolbar>
                    <Divider />
                    <div>
                      <Box display="flex" justifyContent="flex-end" mt={1} mb={1} mr={3}>
                        <Box mr={1}>
                          <Button
                            variant="outlined"
                            style={{
                              color: '#FF5E00',
                              border: '1px solid #FF5E00',
                              padding: '6px 20px',
                            }}
                          >
                            CANCEL
                          </Button>
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            style={{
                              color: 'white',
                              backgroundColor: '#FF5E00',
                              padding: '6px 80px',
                            }}
                          >
                            SAVE
                          </Button>
                        </Box>
                      </Box>
                    </div>
                  </AppBar>
                </div>
              </div>
            </Card>
          </div>
          <Box mt={20}>
            <Card>
              <CardContent>
                <Typography variant="h6">Questionnaire Detail</Typography>
                <Box mt={1} mr={2}>
                  <TextField style={{ margin: 8 }} placeholder="Name*" fullWidth margin="normal" variant="outlined" />
                </Box>
              </CardContent>
            </Card>
            <hr />
            <Card>
              <div>
                <Typography variant="h6">Question</Typography>
                <Box mt={1} mr={2}>
                  <TextField
                    style={{ margin: 8 }}
                    placeholder="Question*"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Box>
                <Box ml={2}>
                  <FormControl fullWidth>
                    <RadioGroup>
                      {inputlist.map((x, i) => {
                        return (
                          <FormControlLabel
                            value={i}
                            control={<Radio />}
                            label={
                              <Box>
                                <TextField
                                  placeholder="Description*"
                                  fullWidth
                                  margin="normal"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  variant="outlined"
                                />
                              </Box>
                            }
                          />
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Button
                  style={{
                    color: '#FF5E00',
                  }}
                  startIcon={<AddIcon />}
                >
                  ADD CHOICE
                </Button>
                <Box mt={1}>
                  <Divider style={{ with: '70%' }} />
                </Box>
                <Box mt={1}>
                  <Button startIcon={<FileCopyIcon />}>DUPLICATE</Button>
                  <Button startIcon={<DeleteIcon />}>DELETE</Button>
                </Box>
              </div>
            </Card>

            {inputlist.map((x, i) => {
              return (
                <Card>
                  <div>
                    <RadioButtons>
                      <input name="Description" value={x.Description} onChange={(e) => handleInputChange(e, i)} />
                    </RadioButtons>
                  </div>
                  <div>
                    {inputlist.length !== 1 && <button onClick={() => handleRemoveClick(i)}>Remove</button>}
                    {inputlist.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                  </div>
                  <hr />
                </Card>
              );
            })}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
