export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string | null;
  followers: number;
  following: number;
  created_at: Date;
  public_repos: number;
};
