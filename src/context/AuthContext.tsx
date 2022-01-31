import React, {
  useEffect,
  useState,
  createContext,
  useCallback,
} from 'react';
import { useNavigation } from '@react-navigation/native';
import { authConfig } from '../firebase/config';

interface User {
  email: string;
  password: string;
}

export interface AuthProviderContext {
  user: User;
  login: (event: User) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthProviderContext>(
  {} as AuthProviderContext
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigation();

  useEffect(() => {
    authConfig.auth().onAuthStateChanged((user: User) => {
      setUser((prevState) => (prevState = user));
      setLoading((prevState) => (prevState = false));
    });
  }, []);

  const login = useCallback(
    async (user: User): Promise<void> => {
      const { email, password } = user; //event.target.elements

      try {
        await authConfig.auth().signInWithEmailAndPassword(email, password); //email.value, password.value
        navigate.navigate('Home');
      } catch {
        throw new Error(
          'Something went wrong. Did you put your email and password?'
        );
      }
    },
    [history]
  );

  const logout = useCallback((): void => {}, []);

  if (loading) {
    return <React.Fragment>Loading...</React.Fragment>;
  }

  const contextValue: AuthProviderContext = {
    user,
    login: useCallback((user: User): Promise<void> => login(user), []),
    logout: useCallback((): void => logout(), []),
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
