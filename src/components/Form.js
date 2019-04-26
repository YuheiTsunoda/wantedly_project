import React from 'react';
import Input from "@material-ui/core/Input";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {FormControl, InputLabel} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


const Form = (props) => (
    <Grid container spacing={0} justify="center">
        <form className="simple-form" onSubmit={props.handleAdd}>
            <FormControl>
                <Grid item xs={12}>
                    <InputLabel>Your todo</InputLabel>
                    <Input

                        className="input"
                        name="title"
                        type="text"
                    />
                    <Fab color="secondary" size="small" aria-label="Add" type="submit" value="Add">
                        <AddIcon/>
                    </Fab>
                </Grid>
            </FormControl>
        </form>
    </Grid>
);

export default Form;