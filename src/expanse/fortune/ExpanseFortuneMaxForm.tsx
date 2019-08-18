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
  modFortune: number;
}

const ExpanseFortuneMaxForm = ({
  onSave,
  maxFortune,
  modFortune,
  currentFortune
}: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    maxFortune,
    modFortune
  });

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;
    const val = Number.parseInt(value, 10);
    setValues({
      ...values,
      [id]: val
    });
  };

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        const newCurrentFortune =
          values.maxFortune !== maxFortune
            ? values.maxFortune
            : Math.max(
                Math.min(currentFortune + values.modFortune, values.maxFortune),
                0
              );
        onSave(values.maxFortune, newCurrentFortune);
        setValues({
          ...values,
          modFortune: 0
        });
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
            type="number"
          />
          <TextField
            id="modFortune"
            label="Add/Remove Fortune"
            className={classes.textField}
            value={values.modFortune || 0}
            onChange={handleChange("modFortune")}
            margin="normal"
            type="number"
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
