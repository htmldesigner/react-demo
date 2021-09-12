import React from "react";
import classes from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClass = [classes.myModal];
  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
  if (visible) {
    rootClass.push(classes.active);
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={rootClass.join(" ")} onClick={() => setVisible(false)}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
