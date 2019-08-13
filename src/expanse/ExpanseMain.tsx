import React from "react";
import PropTypes from "prop-types";
import { createStyles } from "@material-ui/core";

import { Theme, makeStyles } from "@material-ui/core";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";
import ExpanseCharacter from "./character/ExpanseCharacter";
import ExpanseDrama from "./drama/ExpanseDrama";
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
  dataLocation: string;
  data: any;
  discordApiKey: string;
}

const ExpanseDataForm = ({
  onSave,
  name,
  dataLocation,
  data,
  discordApiKey
}: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: name,
    dataLocation: dataLocation,
    data: data,
    discordApiKey: discordApiKey
  });

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(name);
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ExpanseCharacter />
        </Grid>
        <Grid item xs={12}>
          <ExpanseDrama />
        </Grid>
        {/* <Grid item xs={12}>
          <ExpanseFortune />
        </Grid> */}
        <Grid item xs={12}>
          <MaterialTable
            actions={[
              {
                icon: "send",
                tooltip: "Roll",
                onClick: (event, rowData) => {
                  const stunt = rowData as any;
                  const msg = `[${stunt.type}] ${name} spends ${
                    stunt.cost
                  } stunt points to ${stunt.name}: ${stunt.description}.`;
                  sendToDiscord(discordApiKey, name, msg);
                }
              }
            ]}
            columns={[
              { title: "Type", field: "type" },
              { title: "Cost", field: "cost", type: "numeric" },
              { title: "Name", field: "name" },
              { title: "Description", field: "description" }
            ]}
            data={data.stunts}
            title="Stunts"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

ExpanseDataForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  dataLocation: PropTypes.string.isRequired
};

export default ExpanseDataForm;
