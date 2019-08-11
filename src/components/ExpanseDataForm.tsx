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
  dataLocation: string;
}

const ExpanseDataForm = ({ onSave, dataLocation }: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    dataLocation: dataLocation
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
        onSave(values.dataLocation);
      }}
    >
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="dataLocation"
            label="Expanse Data Location (possibly a github gist)"
            className={classes.textField}
            value={values.dataLocation}
            onChange={handleChange("dataLocation")}
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

ExpanseDataForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  dataLocation: PropTypes.string.isRequired
};

export default ExpanseDataForm;
