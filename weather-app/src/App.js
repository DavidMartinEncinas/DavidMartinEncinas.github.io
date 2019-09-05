import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';

const places = [
  'Arrecife, es',
  'Madrid, es',
  'Berlin, ger',
  'Playa del Carmen, mex',
  'Phoenix, us',
  'Nuuk, den',
  'Roma, it',
  'Lisboa, pt',
  'Amsterdam, ned',
];

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h4' color='inherit'>
                Weather APP
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <LocationListContainer places={places}></LocationListContainer>
          </Col>
          <Col xs={12} sm={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;