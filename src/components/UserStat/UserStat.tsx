import styles from './UserStat.module.scss';
import { GitHubUser } from 'types/user';

interface UserStatProps extends Pick<GitHubUser, 'public_repos' | 'following' | 'followers'> {}

export const UserStat = ({public_repos, following, followers}: UserStatProps) => (
<div className={styles.userStat}>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Repos</div>
      <div className={styles.infoNumber}>{public_repos}</div>
    </div>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Following</div>
      <div className={styles.infoNumber}>{following}</div>
    </div>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Followers</div>
      <div className={styles.infoNumber}>{followers}</div>
    </div>
  </div>
);
