import React, {Component} from 'react';
// import TextField from '@material-ui/core/TextField';


const Form = (props) => (
    <form className="simple-form" onSubmit={props.handleAdd}>
        <div className="simple-form-field">
            <label className="simple-label simple--color-white">Your todo:</label>
            <input name="title" type="text" className="simple-input"/> <input type="submit" value="Add"
                                                                              className="simple-btn simple-btn--teal"/>
        </div>
    </form>
);

export default Form;