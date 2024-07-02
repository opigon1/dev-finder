import { GitHubUser } from "types/user";

export const filteredFetchUser = (data: GitHubUser) => {
    return {
        login: data.login,
        id: data.id,
        avatar_url: data.avatar_url,
        name: data.name,
        company: data.company,
        blog: data.blog,
        location: data.location,
        bio: data.bio,
        twitter_username: data.twitter_username,
        followers: data.followers,
        following: data.following,
        created_at: data.created_at,
        public_repos: data.public_repos
    }
}