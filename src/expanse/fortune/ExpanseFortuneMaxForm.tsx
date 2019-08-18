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
    },
    current: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1)
    }
  })
);

interface State {
  maxFortune: number;
}

const ExpanseFortuneMaxForm = ({ onSave, maxFortune, currentFortune }: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    maxFortune: maxFortune
  });

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({
      ...values,
      maxFortune: Number.parseInt(event.target.value, 10)
    });
  };

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        onSave(values.maxFortune);
      }}
    >
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="maxFortune"
            label="Character Max Fortune"
            className={classes.textField}
            value={values.maxFortune}
            onChange={handleChange("maxFortune")}
            margin="normal"
          />
          <div className={classes.current}>
            {`Current Fortune: ${currentFortune}`}
          </div>
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

ExpanseFortuneMaxForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  maxFortune: PropTypes.number.isRequired
};

export default ExpanseFortuneMaxForm;
