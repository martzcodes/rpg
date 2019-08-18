import React from "react";
import PropTypes from "prop-types";
import {
  createStyles,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  CardHeader
} from "@material-ui/core";

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
    target: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1)
    }
  })
);

interface State {
  name: string;
  modifier: number;
  dice: number[];
  newDice: number[];
  spendTotal: number;
  target: number;
  currentFortune: number;
  maxFortune: number;
}

const ExpanseFortuneForm = ({
  onSave,
  name,
  modifier,
  dice,
  target,
  currentFortune,
  maxFortune
}: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: name,
    modifier: modifier,
    dice: dice,
    newDice: [...dice],
    spendTotal: 0,
    target: target,
    currentFortune: currentFortune,
    maxFortune: maxFortune
  });

  const handleChange = (diceInd: number) => (
    event: React.ChangeEvent<unknown>
  ) => {
    const tempDice = [...values.newDice];
    const diceValue = Number.parseInt(
      `${(event.target as HTMLInputElement).value}`,
      10
    );
    tempDice[diceInd] = diceValue;
    let spendTotal = 0;
    tempDice.forEach((roll, ind) => {
      if (roll !== values.dice[ind]) {
        spendTotal += roll;
        if (ind === 2) {
          spendTotal += roll;
        }
      }
    });
    setValues({ ...values, newDice: tempDice, spendTotal: spendTotal });
  };

  const stuntPoints = () => {
    const resultSet = new Set(values.newDice);
    if (resultSet.size <= 2) {
      return values.newDice[2];
    } else {
      return 0;
    }
  };

  const rollTotal = () => {
    let total = Number.parseInt(`${values.modifier}`, 10);
    values.newDice.forEach(roll => {
      total += roll;
    });
    return total;
  };

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        onSave(
          values.name,
          values.modifier,
          values.target,
          values.newDice,
          values.spendTotal,
          values.currentFortune,
          values.maxFortune,
          stuntPoints()
        );
      }}
    >
      <Card className={classes.card}>
        <CardHeader title="Fortune Spender" />
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">Dice 1</FormLabel>
            <RadioGroup
              aria-label="position"
              name="position"
              value={`${values.newDice[0]}`}
              onChange={handleChange(0)}
              row
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" disabled={dice[0] > 1} />}
                label="1"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" disabled={dice[0] > 2} />}
                label="2"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" disabled={dice[0] > 3} />}
                label="3"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" disabled={dice[0] > 4} />}
                label="4"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="5"
                control={<Radio color="primary" disabled={dice[0] > 5} />}
                label="5"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="6"
                control={<Radio color="primary" disabled={dice[0] > 6} />}
                label="6"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Dice 2</FormLabel>
            <RadioGroup
              aria-label="position"
              name="position"
              value={`${values.newDice[1]}`}
              onChange={handleChange(1)}
              row
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" disabled={dice[1] > 1} />}
                label="1"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" disabled={dice[1] > 2} />}
                label="2"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" disabled={dice[1] > 3} />}
                label="3"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" disabled={dice[1] > 4} />}
                label="4"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="5"
                control={<Radio color="primary" disabled={dice[1] > 5} />}
                label="5"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="6"
                control={<Radio color="primary" disabled={dice[1] > 6} />}
                label="6"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Drama</FormLabel>
            <RadioGroup
              aria-label="position"
              name="position"
              value={`${values.newDice[2]}`}
              onChange={handleChange(2)}
              row
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" disabled={dice[2] > 1} />}
                label="1"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" disabled={dice[2] > 2} />}
                label="2"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" disabled={dice[2] > 3} />}
                label="3"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" disabled={dice[2] > 4} />}
                label="4"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="5"
                control={<Radio color="primary" disabled={dice[2] > 5} />}
                label="5"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="6"
                control={<Radio color="primary" disabled={dice[2] > 6} />}
                label="6"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
          <div className={classes.target}>
            {`${
              values.spendTotal > 0 ? "New " : " "
            }Total ${rollTotal()} vs Target ${
              values.target
            }: ${stuntPoints()} Stunt Points`}
          </div>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            type="submit"
            disabled={
              values.spendTotal === 0 ||
              values.currentFortune - values.spendTotal <= 0
            }
          >
            Spend {`${values.spendTotal}`} Fortune
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

ExpanseFortuneForm.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default ExpanseFortuneForm;
