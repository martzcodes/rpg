import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import DiscordKey from "../containers/DiscordKey";
import ExpanseData from "../containers/ExpanseData";

const useStyles = makeStyles(theme => ({} as any));

export default function Settings() {
  const classes: any = useStyles();
  //   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DiscordKey />
        </Grid>
        <Grid item xs={12}>
          <ExpanseData />
        </Grid>
      </Grid>
    </Container>
  );
}
