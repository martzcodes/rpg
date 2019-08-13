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
  maxFortune: number;
}

const ExpanseCharacterForm = ({ onSave, name, maxFortune }: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: name,
    maxFortune: maxFortune
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
        onSave(values.name, values.maxFortune);
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
            id="maxFortune"
            label="Character Max Fortune"
            className={classes.textField}
            value={values.maxFortune}
            onChange={handleChange("maxFortune")}
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
  character: PropTypes.string.isRequired
};

export default ExpanseCharacterForm;
