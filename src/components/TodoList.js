import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';



let style = {
    maxWidth: '700px',
};

let btn = {
    cursor: 'pointer'
};

const TodoList = (props) => (
    <ul className="siimple-list">
        {props.todos.map((todo, i) => {
            // return <li key={i} className="" style={style}>{todo.title} <span
            //         className="" style={btn}
            //         onClick={() => props.handleRemove(i)}>Delete</span></li>
            return(
                <List key={i} className="" style={style}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={todo.title}
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                        <ListItemSecondaryAction onClick={() => props.handleRemove(i)}>
                            <IconButton aria-label="Delete">
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            )
        })}
    </ul>

);

export default TodoList;
