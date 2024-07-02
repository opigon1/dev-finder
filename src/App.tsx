import React from 'react';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserCard } from 'components/UserCard';
import { defaultUser } from 'mock/defaultUser';
import { GitHubUser } from 'types/user';
import { GitHubError } from 'types/error';

function App() {
  const [user, setUser] = React.useState<GitHubUser | null>(defaultUser);
  const [error, setError] = React.useState(false);

  const BASE_URL = 'https://api.github.com/users/';

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    try {
      const res = await fetch(url);
      const data = (await res.json()) as GitHubUser | GitHubError;

      if ('id' in data) {
        setUser(data);
      } else {
        setError(true);
      }
    } catch (err: any) {
      setError(true);
    }
  };
  return (
    <>
      <Container>
        <Header />
        <Search hasError={error} onSubmit={fetchUser} />
        <UserCard {...user} />
      </Container>
    </>
  );
}

export default App;
