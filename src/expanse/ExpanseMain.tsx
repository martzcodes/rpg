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

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import DramaRoll from "../components/DramaRoll";
import MaterialTable from "material-table";
import ExpanseCharacter from "./character/ExpanseCharacter";
import ExpanseDrama from "./drama/ExpanseDrama";

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
  data: any;
}

const ExpanseDataForm = ({ onSave, dataLocation, data }: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    dataLocation: dataLocation,
    data: data
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
        <Grid item xs={12}>
          <MaterialTable
            actions={[
              {
                icon: "send",
                tooltip: "Roll",
                onClick: (event, rowData) => {
                  console.log(rowData);
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
