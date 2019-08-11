import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddRoll from "../containers/AddRoll";
import VisibleRollList from "../containers/VisibleRollList";
import ManualRoll from "../components/ManualRoll";

const useStyles = makeStyles(theme => ({} as any));

export default function Dnd() {
  const classes: any = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ManualRoll />
        </Grid>
        <Grid item xs={12}>
          <AddRoll />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <VisibleRollList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
