import { GitHubUser } from 'types/user';
import styles from './UserTitle.module.scss';
import { localDate } from 'utils/localDate';

interface UserTitleProps
  extends Pick<GitHubUser, 'name' | 'login' | 'created_at'> {}

export const UserTitle = ({ name, login, created_at }: UserTitleProps) => {
  const joinedDate = created_at ? localDate.format(new Date(created_at)) : 'Unknown date';

  return (
    <div className={styles.userTitle}>
      <h2>{name ? name : 'Not Available'}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};
