import React, {Component} from 'react';
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";
import {FormControl} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const Filter = (props) => (
    <FormControl component="fieldset">
        <RadioGroup
            aria-label="position"
            name="position"
            value={props.value}
            onChange={props.handleChange}
            row
        >
            <FormControlLabel
                value="all"
                control={<Radio color="primary"/>}
                label="all"
                labelPlacement="top"
            />
            <FormControlLabel
                value="check"
                control={<Radio color="primary"/>}
                label="check"
                labelPlacement="top"
            />
            <FormControlLabel
                value="uncheck"
                control={<Radio color="primary"/>}
                label="uncheck"
                labelPlacement="top"
            />

        </RadioGroup>
    </FormControl>
);

export default Filter;