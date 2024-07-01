import styles from './UserCard.module.scss';
import { GitHubUser } from 'types/user';
import { UserStat } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';


export const UserCard = (props: GitHubUser) => (
  <div className={styles.userCard}>
    <img src={props.avatar_url} alt={props.login} className={styles.avatar} />
    <UserTitle
      created_at={props.created_at}
      login={props.login}
      name={props.name}
    />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat
      public_repos={props.public_repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      id={props.id}
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter_username={props.twitter_username}
    />
  </div>
);
