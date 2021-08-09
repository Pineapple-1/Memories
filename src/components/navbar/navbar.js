import React from "react";

const navbar = () => {
  return (
    <div>
      <AppBar className={Classes.appBar} position="static" color="inherit">
        <Typography className={Classes.heading} variant="h3" align="center">
          Memories
        </Typography>
        <img
          className={Classes.image}
          src={memories}
          alt="memories"
          height="50"
        />
      </AppBar>
    </div>
  );
};

export default navbar;
