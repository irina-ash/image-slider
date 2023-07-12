import { useCallback, useEffect, useState } from "react";
import cn from "classnames";

import Arrow from "../Arrow";
import DotsSlider from "../DotsSlider";

import { IImageSliderProps, ISlideImage } from "./types";

import { ReactComponent as Zoom } from "../../icons/zoom.svg";
import { ReactComponent as Close } from "../../icons/close-icon-black.svg";
import styles from "./ImageSlider.module.scss";

const ImageSlider = ({
  className,
  defaultActiveIndex,
  imageClassName,
  isMobile,
  isZoom,
  items,
  onClose,
  onSlideChange,
  onZoomClick,
}: IImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex || 0);
  const [activeItem, setActiveItem] = useState<ISlideImage | null>(null);
  const [childrenCount, setChildrenCount] = useState(0);

  useEffect(() => {
    items?.length && setChildrenCount(items.length);
  }, [items]);

  useEffect(() => {
    onSlideChange?.(activeIndex);
    items?.[activeIndex] && setActiveItem(items[activeIndex]);
  }, [activeIndex]);

  const renderArrow = (direction, onClick) => (
    <Arrow
      className={styles.arrow}
      direction={direction}
      onClick={onClick}
      size="s"
    />
  );

  const slideToLeft = () => {
    const newIndex = (activeIndex || childrenCount) - 1;
    setActiveIndex(newIndex);
  };

  const slideToRight = () => {
    const newIndex = activeIndex + 1 > childrenCount - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  const zoomImage = useCallback(() => onZoomClick?.(), []);
  const backgroundImageStyle = {
    backgroundImage: `url(${
      isZoom ? activeItem?.bigImage : activeItem?.public_url
    })`,
  };

  return (
    <div className={cn(styles.slider, className)}>
      <div
        className={cn(
          styles.current,
          { [styles.currentZoom]: isZoom },
          imageClassName,
        )}
        style={backgroundImageStyle}
      >
        {!!onClose && (
          <Close className={styles.close} onClick={onClose}/>
        )}
        <div className={styles.arrows}>
          {renderArrow("left", slideToLeft)}
          {renderArrow("right", slideToRight)}
        </div>
        {activeItem?.bigImage && onZoomClick && (
          <Zoom className={styles.zoomIcon} onClick={zoomImage}/>
        )}
      </div>
      <p
        className={styles.description}
      >
        {activeItem?.text}
      </p>
      {!isMobile && 
        <div className={styles.slides}>
          {items?.map((value, index) => (
            <div
              key={index}
              className={cn(styles.slide, {
                [styles.slideSelected]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
              style={{
                backgroundImage: `url(${value?.public_url})`,
              }}
            />
          ))}
        </div>
      }

      {isMobile && !!items?.length && (
        <DotsSlider
          active={activeIndex}
          className={styles.dots}
          frames={items?.map((_item, index) => index)}
          onDotClick={index => setActiveIndex(index)}
        />
      )}
    </div>
  );
};

export default ImageSlider;
