import React from "react";
import PropTypes from "prop-types";
import { createStyles, TextField, CardHeader } from "@material-ui/core";

import {
  Theme,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import MaterialTable from "material-table";
import { sendToDiscord } from "../../services/discord";

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
  target: number;
}

const ExpanseStatRollForm = ({
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
    willpower: willpower,
    target: 10
  });

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(name);
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader title="Manual Roll" />
        <CardContent>
          <TextField
            id="target"
            label="Target"
            className={classes.textField}
            value={values.target}
            onChange={handleChange("target")}
            margin="normal"
          />
          <MaterialTable
            actions={[
              {
                icon: "send",
                tooltip: "Roll",
                onClick: (event, rowData) => {
                  const stat = rowData as any;
                  onSave(
                    values.name,
                    Number.parseInt(`${stat.modifier}`, 10),
                    values.target,
                    `(${stat.ability}) ${stat.focus}`
                  );
                }
              },
              {
                icon: "favorite",
                tooltip: "Roll with Focus",
                onClick: (event, rowData) => {
                  const stat = rowData as any;
                  onSave(
                    values.name,
                    Number.parseInt(`${stat.modifier}`, 10) + 2,
                    values.target,
                    `(${stat.ability}) ${stat.focus}`
                  );
                }
              }
            ]}
            columns={[
              { title: "Ability", field: "ability" },
              { title: "Focus", field: "focus" },
              { title: "Modifier", field: "modifier", type: "numeric" }
            ]}
            data={[
              { ability: "Accuracy", focus: "Generic", modifier: accuracy },
              { ability: "Accuracy", focus: "Bows", modifier: accuracy },
              { ability: "Accuracy", focus: "Gunnery", modifier: accuracy },
              { ability: "Accuracy", focus: "Pistols", modifier: accuracy },
              { ability: "Accuracy", focus: "Rifles", modifier: accuracy },
              { ability: "Accuracy", focus: "Throwing", modifier: accuracy },
              {
                ability: "Communication",
                focus: "Generic",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Bargaining",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Deception",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Disguise",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Etiquette",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Expression",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Gambling",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Investigation",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Leadership",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Performing",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Persuasion",
                modifier: communication
              },
              {
                ability: "Communication",
                focus: "Seduction",
                modifier: communication
              },
              {
                ability: "Constitution",
                focus: "Generic",
                modifier: constitution
              },
              {
                ability: "Constitution",
                focus: "Running",
                modifier: constitution
              },
              {
                ability: "Constitution",
                focus: "Stamina",
                modifier: constitution
              },
              {
                ability: "Constitution",
                focus: "Swimming",
                modifier: constitution
              },
              {
                ability: "Constitution",
                focus: "Tolerance",
                modifier: constitution
              },
              {
                ability: "Dexterity",
                focus: "Generic",
                modifier: dexterity
              },
              {
                ability: "Dexterity",
                focus: "Crafting",
                modifier: dexterity
              },
              {
                ability: "Dexterity",
                focus: "Driving",
                modifier: dexterity
              },
              {
                ability: "Dexterity",
                focus: "Free-fall",
                modifier: dexterity
              },
              {
                ability: "Dexterity",
                focus: "Initiative",
                modifier: dexterity
              },
              {
                ability: "Dexterity",
                focus: "Piloting",
                modifier: dexterity
              },
              {
                ability: "Dexterity",
                focus: "Sleight of Hand",
                modifier: dexterity
              },
              {
                ability: "Dexterity",
                focus: "Stealth",
                modifier: dexterity
              },
              {
                ability: "Fighting",
                focus: "Generic",
                modifier: fighting
              },
              {
                ability: "Fighting",
                focus: "Brawling",
                modifier: fighting
              },
              {
                ability: "Fighting",
                focus: "Grappling",
                modifier: fighting
              },
              {
                ability: "Fighting",
                focus: "Heavy Weapons",
                modifier: fighting
              },
              {
                ability: "Fighting",
                focus: "Light Weapons",
                modifier: fighting
              },
              {
                ability: "Intelligence",
                focus: "Generic",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Art",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Business",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Cryptography",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Current Affairs",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Demolitions",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Engineering",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Evaluation",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Law",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Medicine",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Navigation",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Research",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Science",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Security",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Tactics",
                modifier: intelligence
              },
              {
                ability: "Intelligence",
                focus: "Technology",
                modifier: intelligence
              },
              {
                ability: "Perception",
                focus: "Generic",
                modifier: perception
              },
              {
                ability: "Perception",
                focus: "Empathy",
                modifier: perception
              },
              {
                ability: "Perception",
                focus: "Hearing",
                modifier: perception
              },
              {
                ability: "Perception",
                focus: "Intuition",
                modifier: perception
              },
              {
                ability: "Perception",
                focus: "Searching",
                modifier: perception
              },
              {
                ability: "Perception",
                focus: "Seeing",
                modifier: perception
              },
              {
                ability: "Perception",
                focus: "Smelling",
                modifier: perception
              },
              {
                ability: "Perception",
                focus: "Survival",
                modifier: perception
              },
              {
                ability: "Perception",
                focus: "Tasting",
                modifier: perception
              },
              {
                ability: "Perception",
                focus: "Touching",
                modifier: perception
              },
              {
                ability: "Perception",
                focus: "Tracking",
                modifier: perception
              },
              {
                ability: "Strength",
                focus: "Generic",
                modifier: strength
              },
              {
                ability: "Strength",
                focus: "Climbing",
                modifier: strength
              },
              {
                ability: "Strength",
                focus: "Intimidation",
                modifier: strength
              },
              {
                ability: "Strength",
                focus: "Jumping",
                modifier: strength
              },
              {
                ability: "Strength",
                focus: "Might",
                modifier: strength
              },
              {
                ability: "Willpower",
                focus: "Generic",
                modifier: willpower
              },
              {
                ability: "Willpower",
                focus: "Courage",
                modifier: willpower
              },
              {
                ability: "Willpower",
                focus: "Faith",
                modifier: willpower
              },
              {
                ability: "Willpower",
                focus: "Self-Discipline",
                modifier: willpower
              }
            ]}
            title="Stat Rolls"
          />
        </CardContent>
      </Card>
    </div>
  );
};

ExpanseStatRollForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default ExpanseStatRollForm;
