import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ChildrenProps {
  children: ReactNode;
}

export const Container = ({ children }: ChildrenProps) => (
  <div className={styles.container}>
    {children}
  </div>
);
