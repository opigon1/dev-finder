import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>{text}</button>
);
