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
  modifier: number;
  target: number;
  description: string;
}

const ExpanseDramaForm = ({
  onSave,
  name,
  modifier,
  target,
  description
}: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: name,
    modifier: modifier,
    target: target,
    description: description
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
        onSave(values.name, values.modifier, values.target, values.description);
      }}
    >
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="modifier"
            label="Modifier"
            className={classes.textField}
            value={values.modifier}
            onChange={handleChange("modifier")}
            margin="normal"
          />
          <TextField
            id="description"
            label="Action Description"
            className={classes.textField}
            value={values.description}
            onChange={handleChange("description")}
            margin="normal"
          />
          <TextField
            id="target"
            label="Target"
            className={classes.textField}
            value={values.target}
            onChange={handleChange("target")}
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" type="submit">
            Roll and Send
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

ExpanseDramaForm.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default ExpanseDramaForm;
