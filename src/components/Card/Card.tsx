import { FunctionComponent } from "react";
import styles from "./Card.module.css";

interface CardProps {
  className?: string;
  children?: React.ReactNode
}

const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
