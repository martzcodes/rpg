import React from "react";
import PropTypes from "prop-types";
import Roll from "./Roll";
import { List } from "@material-ui/core";

const RollList = ({ rolls, sendRoll, removeRoll }: any) => {
  console.log(rolls);
  return (
    <List>
      {rolls.map((roll: any) => (
        <Roll
          key={roll.id}
          {...roll}
          onClick={() => sendRoll(roll.id)}
          onRemove={() => removeRoll(roll.id)}
        />
      ))}
    </List>
  );
};

RollList.propTypes = {
  rolls: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      roll: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  sendRoll: PropTypes.func.isRequired,
  removeRoll: PropTypes.func.isRequired
};

export default RollList;
