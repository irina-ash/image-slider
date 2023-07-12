export interface IArrowProps {
    className?: string;
    direction: "left" | "right" | "top" | "bottom";
    onClick(): void;
    size?: "xxs" | "xs" | "s" | "m" | "l";
}