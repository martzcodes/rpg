import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
  SvgIcon
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import InboxIcon from "@material-ui/icons/Inbox";

const Roll = ({
  onClick,
  name,
  roll,
  character,
  description,
  onRemove
}: any) => (
  <ListItem button onClick={onClick}>
    <ListItemText
      primary={`${name}: ${roll}`}
      secondary={`${character}: ${description}`}
    />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="Delete" onClick={onRemove}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

Roll.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  roll: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default Roll;
