export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string;
  styles: string; // Added styles
  onClick?: () => void;
}
