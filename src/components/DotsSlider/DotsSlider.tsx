import { memo } from "react";
import cn from "classnames";

import { IDotsSliderProps } from "./types";

import styles from "./DotsSlider.module.scss";

const DotsSlider = ({
  active,
  className,
  frames,
  onDotClick,
}: IDotsSliderProps) => (
  <div className={cn(styles.container, className)}>
    {frames.map((item, index) => (
      <div
        key={index}
        className={cn(styles.dot, { [styles.dotSelected]: index === active })}
        onClick={() => onDotClick?.(index)}
      />
    ))}
  </div>
);

export default memo(DotsSlider);
