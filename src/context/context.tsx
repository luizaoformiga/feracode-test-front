import axios, { AxiosResponse } from 'axios';
import { createContext, useCallback, useState } from 'react';

export const FootballContext = createContext<any>({} as any);

const FootballProvider: React.FC = ({ children }) => {
  const [footballState, setFootballState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: 0,
      avatar_url: '',
      login: '',
      name: '',
      html_url: '',
      blog: '',
      company: [],
      location: '',
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username: string): void => {
    setFootballState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    axios
      .get(`users/${username}`)
      .then((data: AxiosResponse<any>) => {
        setFootballState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data?.data.id,
            avatar_url: data?.data.avatar_url,
            login: data?.data.login,
            name: data?.data.name,
            html_url: data?.data.html_url,
            blog: data?.data.blog,
            company: data?.data.company,
            location: data?.data.location,
            followers: data?.data.followers,
            following: data?.data.following,
            public_gists: data?.data.public_gists,
            public_repos: data?.data.public_repos,
          },
        }));
      })
      .finally(() => {
        setFootballState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserRepos = (username: string): void => {
    axios
      .get(`users/${username}/repos`)
      .then(({ data }) => {
        console.log('data: ' + JSON.stringify(data));

        setFootballState((prevState) => ({
          ...prevState,
          repositories: data,
        }));
      })
      .catch((error: Error) => error);
  };

  const getUserStarred = (username: string): void => {
    axios
      .get(`users/${username}/starred`)
      .then(({ data }) => {
        console.log('data: ' + JSON.stringify(data));
        setFootballState((prevState) => ({
          ...prevState,
          starred: data,
        }));
      })
      .catch((error: Error) => error);
  };

  const contextValue = {
    footballState,
    getUser: useCallback((username: string): void => getUser(username), []),
    getUserRepos: useCallback(
      (username: string): void => getUserRepos(username),
      []
    ),
    getUserStarred: useCallback(
      (username: string): void => getUserStarred(username),
      []
    ),
  };

  return (
    <FootballContext.Provider value={contextValue}>
      {children}
    </FootballContext.Provider>
  );
};

export default FootballProvider;
