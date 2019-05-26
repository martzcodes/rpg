import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "../components/Footer";

const useStyles = makeStyles(theme => ({} as any));

export default function Landing() {
  const classes: any = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
