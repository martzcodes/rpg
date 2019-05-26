import React from "react";

import { Typography, Link } from "@material-ui/core";

export default function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with "}
      <span role="img" aria-label="beer">
        🍺
      </span>
      {", "}
      <span role="img" aria-label="coffee">
        ☕
      </span>
      {", and "}
      <span role="img" aria-label="love">
        💗
      </span>
      {" by "}
      <Link color="inherit" href="https://linkedin.com/in/martzcodes/">
        martzcodes
      </Link>
      {"."}
    </Typography>
  );
}
