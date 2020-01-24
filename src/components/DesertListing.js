import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Listing from '../shared/listing/Listing'

const spacingTable = {
    padding: '20px 0 0 0'
}

class DesertListing extends React.Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={9} >
                        {/* content  */}
                    </Grid>

                    <Grid item xs={3} >
                        <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                    </Grid>
                    
                    <Grid item xs={12} style={spacingTable}>
                        <Listing />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default DesertListing;