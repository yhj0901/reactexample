'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const AuthPage = () => {
  const { data: session, status } = useSession();
  return (
    <nav>
      {session ? (
        <div>
          <button onClick={() => signOut()}>SignOut</button>
          <p>status: {status}</p>
          <p>email: {session.user?.email}</p>
          <p>name: {session.user?.name}</p>
          <p>expires: {session.expires}</p>
          <Image
            src={session.user?.image ?? ''}
            alt="user-image"
            width={30}
            height={30}
          />
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
