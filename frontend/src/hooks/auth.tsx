import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import jwt, { JwtPayload } from 'jsonwebtoken';
import api from '../services/api';

interface AuthState {
  token: string;
  accountId: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  accountId: string;
  isLogged: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

interface Children {
  children: ReactNode;
}

export const AuthProvider: React.FunctionComponent<Children> = ({
  children,
}) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Index:token');
    const accountId = localStorage.getItem('@Index:accountId');

    if (token) {
      api.defaults.headers['x-access-token'] = token;

      return { accountId, token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    await api
      .post('/login', {
        email,
        password,
      })
      .then(response => {
        if (response.status === 200) {
          const { accessToken } = response.data;

          api.defaults.headers['x-access-token'] = accessToken;

          const payload = jwt.decode(accessToken) as JwtPayload;

          setData({ accountId: payload.id, token: accessToken });

          localStorage.setItem('@Index:token', accessToken);
          localStorage.setItem('@Index:accountId', payload.id);
        }
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Index:token');
    localStorage.removeItem('@Index:accountId');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accountId: data.accountId,
        isLogged: !!data.token,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
