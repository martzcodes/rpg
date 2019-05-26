import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  createStyles,
  TextField
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import InboxIcon from "@material-ui/icons/Inbox";

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
  apiKey: string;
}

const DiscordKeyForm = ({ onSave, apiKey }: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    apiKey: apiKey
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
        onSave(values.apiKey);
      }}
    >
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="apiKey"
            label="API Key"
            className={classes.textField}
            value={values.apiKey}
            onChange={handleChange("apiKey")}
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

DiscordKeyForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired
};

export default DiscordKeyForm;
