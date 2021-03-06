import React from "react";
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
import store from "..";
import { Dice } from "dice-typescript";
import { sendToDiscord } from "../services/discord";

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
  target: string;
  character: string;
  description: string;
  roll: string;
}

const ManualRoll = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    target: "",
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
    if (!values.character.trim()) {
      return;
    }
    const discord: any = store.getState().discord;
    if (discord.apiKey) {
      let msg = `${values.description}`;
      if (values.roll) {
        const dice = new Dice();
        const result = dice.roll(values.roll);
        msg = `${values.description}: (${values.roll}) ${
          result.renderedExpression
        } = ${result.total}`;
        if (values.target.trim()) {
          msg += ` against ${values.target.trim()}`;
        }
      }
      sendToDiscord(discord.apiKey, values.character, msg);
    }
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
            Send to Discord
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default ManualRoll;
