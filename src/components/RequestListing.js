import React from "react";

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core//Avatar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Button, Link} from '@material-ui/core';

const spacingTable = {
    padding: '20px 0 0 0'
}

const m1 = {
    margin: '0 1px'
}

const elements = [1, 2, 3, 4, 5];

const image = "https://d55sufatni-flywheel.netdna-ssl.com/wp-content/uploads/2019/04/team.png";

class RequestListing extends React.Component {
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
                </Grid>

                <Grid container style={spacingTable} spacing={3}>
                    {elements.map((value, index) => {
                        return (
                            <Grid item xs={3}>
                                <Card>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <CardMedia
                                                style={{height: '100%'}}
                                                image={image}
                                                title="lorem ipsum"
                                            />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <CardContent>
                                                <Typography component="h5" variant="h5">
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="p" color="textSecondary">
                                                    Mac Miller
                                                </Typography>
                                                <Grid row spacing={3}>
                                                    <Button variant="contained" color="primary" style={m1}>Accept</Button>
                                                    <Button variant="contained" color="secondary" style={m1}>Reject</Button>
                                                </Grid>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

export default RequestListing;