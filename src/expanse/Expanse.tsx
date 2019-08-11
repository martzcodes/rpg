import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddRoll from "../containers/AddRoll";
import VisibleRollList from "../containers/VisibleRollList";
import DiscordKey from "../containers/DiscordKey";
import DramaRoll from "../components/DramaRoll";

const useStyles = makeStyles(theme => ({} as any));

export default function Expanse() {
  const classes: any = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DramaRoll />
        </Grid>
      </Grid>
    </Container>
  );
}
