export interface IDotsSliderProps {
  active?: number;
  className?: string;
  frames: number[];
  onDotClick?(index: number): void;
}
