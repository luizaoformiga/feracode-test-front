import { useContext } from 'react';
import { AuthContext, AuthProviderContext } from '../context/AuthContext';

export function useAuth(): AuthProviderContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('');
  }

  return context;
}
