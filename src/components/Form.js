import React, {Component} from 'react';
import Input from "@material-ui/core/Input";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
// import TextField from '@material-ui/core/TextField';


const Form = (props) => (
    <form className="simple-form" onSubmit={props.handleAdd}>
        <div className="simple-form-field">
            <label className="simple-label simple--color-white">Your todo:</label>
            {/*<input name="title" type="text" className="simple-input"/> */}
            {/*<input type="submit" value="Add" className="simple-btn simple-btn--teal"/>*/}
            <Input
                placeholder="Placeholder"
                className="input"
                name="title"
                type="text"
                inputProps={{
                    'aria-label': 'Description',
                }}
            />
            <Fab color="secondary" size="small" aria-label="Add" type="submit" value="Add">
                <AddIcon/>
            </Fab>

        </div>
    </form>
);

export default Form;