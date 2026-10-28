import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
  user: { id: string; name: string; email?: string; role: 'admin' | 'editor' | 'reader' } | null;
  loading: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

/**
 * AuthProvider — integración mínima.
 * Se recomienda Clerk: npm i @clerk/clerk-react
 * O Supabase Auth solo para auth. Esto requiere ClerkProvider envolvente.
 */
export default function AuthProvider({ children }: { children: ReactNode }) {
  // Placeholder: conectar a Clerk/Supabase Auth aquí
  // por ahora simulamos un reader para el feed público
  const auth = {
    user: null as any,
    loading: false,
    signIn: () => console.log('Redirect to sign-in'),
    signOut: () => console.log('Sign out'),
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
