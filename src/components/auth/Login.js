import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const formStyle = {
    padding: '50px 0',
    justifyContent: 'center'
}

const formItem = {
    margin: '10px 0',
}

class Login extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={3} style={formStyle}>
                    <Grid item xs={4} spacing={3}>
                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic-email" label="Email" variant="outlined" fullWidth style={formItem} />
                            <TextField id="outlined-basic-password" label="Password" variant="outlined" fullWidth style={formItem} />
                            <FormControl component="fieldset">
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel
                                        value="remember"
                                        control={<Checkbox color="primary" />}
                                        label="Remember me"
                                        labelPlacement="end"
                                    />
                                </FormGroup>
                            </FormControl>
                            <Button variant="contained" color="primary" fullWidth spacing={3}>Login</Button>
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Login;