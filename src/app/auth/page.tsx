'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

const AuthPage = () => {
  const { data: session, status } = useSession();
  return (
    <nav>
      {session ? (
        <div>
          <button onClick={() => signOut()}>SignOut</button>
          <p>
            status: {status} | data: {session.user?.email}
          </p>
        </div>
      ) : (
        <div>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
          <p>status: {status}</p>
        </div>
      )}
    </nav>
  );
};

export default AuthPage;
