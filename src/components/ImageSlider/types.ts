export interface ISlideImage {
  alt?: string;
  bigImage?: string;
  public_url: string;
  text?: string;
}

export interface IImageSliderProps {
  className?: string;
  defaultActiveIndex?: number;
  imageClassName?: string;
  items: ISlideImage[];
  onSlideChange?(index: number): void;
  onZoomClick?(): void;
  isMobile?: boolean;
  isZoom?: boolean;
  onClose?(): void;
}
