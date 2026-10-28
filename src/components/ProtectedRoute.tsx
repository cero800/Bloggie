import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'admin' | 'editor' | 'reader';
}

export default function ProtectedRoute({ children, requiredRole = 'reader' }: ProtectedRouteProps) {
  const user = { role: 'reader' as 'reader' | 'editor' | 'admin' };

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const roleHierarchy = { reader: 1, editor: 2, admin: 3 };
  if (roleHierarchy[user.role] < roleHierarchy[requiredRole]) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}