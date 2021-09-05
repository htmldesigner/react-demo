import React from "react";
import classes from "./MyBytton.module.css";

const MyButton = ({ children, ...props }) => (
  <button type="button" {...props} className={classes.myBtn}>
    {children}
  </button>
);

export default MyButton;
