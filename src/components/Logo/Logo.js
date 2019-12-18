import React from "react";

import fcbLogo from "../../assets/fcb.png";
import classes from "./Logo.module.css";

const Logo = () => (
    <div className={classes.Logo}>
        <img src={fcbLogo} alt="fcbLogo" />
    </div>
);

export default Logo;
