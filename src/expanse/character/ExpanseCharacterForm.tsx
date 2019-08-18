import React from "react";
import PropTypes from "prop-types";
import { createStyles, TextField } from "@material-ui/core";

import {
  Theme,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      //   display: "flex",
      //   flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    description: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%"
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    },
    card: {
      //   maxWidth: 345
    }
  })
);

interface State {
  name: string;
  accuracy: number;
  communication: number;
  constitution: number;
  dexterity: number;
  fighting: number;
  intelligence: number;
  perception: number;
  strength: number;
  willpower: number;
}

const ExpanseCharacterForm = ({
  onSave,
  name,
  accuracy,
  communication,
  constitution,
  dexterity,
  fighting,
  intelligence,
  perception,
  strength,
  willpower
}: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: name,
    accuracy: accuracy,
    communication: communication,
    constitution: constitution,
    dexterity: dexterity,
    fighting: fighting,
    intelligence: intelligence,
    perception: perception,
    strength: strength,
    willpower: willpower
  });

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(name);
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        onSave({
          name: values.name,
          accuracy: values.accuracy,
          communication: values.communication,
          constitution: values.constitution,
          dexterity: values.dexterity,
          fighting: values.fighting,
          intelligence: values.intelligence,
          perception: values.perception,
          strength: values.strength,
          willpower: values.willpower
        });
      }}
    >
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="name"
            label="Character Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />
          <TextField
            id="accuracy"
            label="Character Accuracy"
            className={classes.textField}
            value={values.accuracy}
            onChange={handleChange("accuracy")}
            margin="normal"
          />
          <TextField
            id="communication"
            label="Character Communication"
            className={classes.textField}
            value={values.communication}
            onChange={handleChange("communication")}
            margin="normal"
          />
          <TextField
            id="constitution"
            label="Character Constitution"
            className={classes.textField}
            value={values.constitution}
            onChange={handleChange("constitution")}
            margin="normal"
          />
          <TextField
            id="dexterity"
            label="Character Dexterity"
            className={classes.textField}
            value={values.dexterity}
            onChange={handleChange("dexterity")}
            margin="normal"
          />
          <TextField
            id="fighting"
            label="Character Fighting"
            className={classes.textField}
            value={values.fighting}
            onChange={handleChange("fighting")}
            margin="normal"
          />
          <TextField
            id="intelligence"
            label="Character Intelligence"
            className={classes.textField}
            value={values.intelligence}
            onChange={handleChange("intelligence")}
            margin="normal"
          />
          <TextField
            id="perception"
            label="Character Perception"
            className={classes.textField}
            value={values.perception}
            onChange={handleChange("perception")}
            margin="normal"
          />
          <TextField
            id="strength"
            label="Character Strength"
            className={classes.textField}
            value={values.strength}
            onChange={handleChange("strength")}
            margin="normal"
          />
          <TextField
            id="willpower"
            label="Character Willpower"
            className={classes.textField}
            value={values.willpower}
            onChange={handleChange("willpower")}
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" type="submit">
            Save
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

ExpanseCharacterForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default ExpanseCharacterForm;
