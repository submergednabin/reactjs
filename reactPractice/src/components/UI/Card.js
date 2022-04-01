import React from "react";
import styles from './Card.module.css';

const Card = (props) => {
    const classes = `${styles.card} ${props.className} `; //always use string literal i.e `` to display such cases
    return <div className={ classes }>{props.children}</div>;
};

export default Card;