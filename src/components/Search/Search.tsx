import React from 'react';
import { Button } from 'components/Button';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current ? inputRef.current.value : '';

    if (inputValue) {
      onSubmit(inputValue);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type='text'
          className={styles.textField}
          id='search'
          name='username'
          placeholder='Search GitHub username...'
          ref={inputRef}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button text='Search' />
      </div>
    </form>
  );
};
