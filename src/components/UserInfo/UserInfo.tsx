import styles from './UserInfo.module.scss';
import { GitHubUser } from 'types/user';
import { InfoItemProps, InfoItem } from 'components/InfoItem';
import { ReactComponent as TwiterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as CompanyrIcon } from '../../assets/icon-company.svg';
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg';
import { ReactComponent as WebsiteIcon } from '../../assets/icon-website.svg';

interface UserInfoProps
  extends Pick<
    GitHubUser,
    'company' | 'location' | 'twitter_username' | 'blog' | 'id'
  > {}

export const UserInfo = ({
  company,
  location,
  twitter_username,
  blog,
  id,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <TwiterIcon />,
      text: twitter_username,
    },
    {
      icon: <CompanyrIcon />,
      text: company,
    },
    {
      icon: <WebsiteIcon />,
      text: blog,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
