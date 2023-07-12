import {memo} from "react";
import cn from "classnames";

import styles from "./Arrow.module.scss";
import { IArrowProps } from "./types";

const Arrow = ({
  className,
  direction = "right",
  onClick,
  size = "xs",
}: IArrowProps) => {
  return (
    <div
      className={cn(className, styles.arrowWrapper, styles[`arrowWrapper--size-${size}`])}
    >
      <div
        className={cn(styles.arrow, styles[`arrow--direction-${direction}`])}
        onClick={onClick}
        role="presentation"
      />
    </div>
  );
};

export default memo(Arrow);
