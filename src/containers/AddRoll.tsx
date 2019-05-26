import React from "react";
import { connect } from "react-redux";
import { addRoll } from "../actions";
import {
  Theme,
  makeStyles,
  createStyles,
  TextField,
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
  character: string;
  description: string;
  roll: string;
}

const AddRoll = ({ dispatch }: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: "",
    character: "",
    description: "",
    roll: ""
  });

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(name);
    setValues({ ...values, [name]: event.target.value });
  };

  const sendRoll = (e: any) => {
    e.preventDefault();
    if (!values.name.trim()) {
      return;
    }
    dispatch(
      addRoll({
        name: values.name.trim(),
        roll: values.roll.trim(),
        character: values.character.trim(),
        description: values.description.trim()
      })
    );
    setValues({ ...values, name: "", description: "", roll: "" });
  };

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={sendRoll}
    >
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />
          <TextField
            id="character"
            label="Character"
            className={classes.textField}
            value={values.character}
            onChange={handleChange("character")}
            margin="normal"
          />
          <TextField
            id="roll"
            label="Roll"
            className={classes.textField}
            value={values.roll}
            onChange={handleChange("roll")}
            margin="normal"
          />
          <TextField
            id="description"
            label="Description"
            className={classes.description}
            value={values.description}
            onChange={handleChange("description")}
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" type="submit">
            Add Roll
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default connect()(AddRoll);
