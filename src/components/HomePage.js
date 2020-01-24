import React from 'react';
import Grid from '@material-ui/core/Grid';

import CardBox from '../shared/card-box/CardBox'

const elements = [1, 2, 3, 4, 5, 6, 7, 8];

const HomePage = () => {
  return (
    <div> 
      <Grid container spacing={3}>
        {elements.map((value, index) => {
          return (
            <Grid item xs={3}>
              <CardBox /> 
            </Grid>
          ) 
        })}
      </Grid>
    </div>
  );
};

export default HomePage;
