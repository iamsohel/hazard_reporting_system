'use client';

import Image from 'next/image';
import Link from 'next/link';

type TSocialLogin = {
  mode: 'login' | 'register';
};

const SocialLogins = ({ mode }: TSocialLogin) => {
  const handleAuth = (e: string) => {
    if (e === 'google') {
    }
  };

  return (
    <>
      <div className="flex gap-4 w-[415px]">
        <button
          onClick={() => {
            handleAuth('google');
          }}
          className="w-full border border-gray  rounded-md flex items-center gap-2 justify-center h-[52px]"
        >
          <Image
            src="/google.png"
            alt="google"
            width={30}
            height={30}
            className="p-[4px]"
          />
          {mode === 'login' ? (
            <span>Continue with Google</span>
          ) : (
            <span>Sign up with Google</span>
          )}
        </button>
      </div>
      {mode === 'register' ? (
        <div className="text-center text-xs text-gray-500 mt-2 font-medium">
          Already have an Account?{' '}
          <Link className="text-blue-500" href="/login">
            Login
          </Link>
        </div>
      ) : (
        <div className="text-center text-xs text-gray-500 mt-2 font-medium">
          Don’t have an Account?{' '}
          <Link className="text-blue-500" href="/register">
            Create Account
          </Link>
        </div>
      )}
    </>
  );
};

export default SocialLogins;
