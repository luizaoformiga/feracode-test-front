import { useContext } from 'react';
import { FootballContext } from '../context/context';

const useFootball = () => {
  const { footballState, getUser, getUserRepos, getUserStarred } =
    useContext(FootballContext);

  return { footballState, getUser, getUserRepos, getUserStarred };
};

export default useFootball;
