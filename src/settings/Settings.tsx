import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({} as any));

export default function Settings() {
  const classes: any = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>{/* <Orders /> */}</Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>{/* <Chart /> */}</Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>{/* <Deposits /> */}</Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>{/* <Orders /> */}</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
