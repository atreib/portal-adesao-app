import { useState } from 'react';
import { LockClosedIcon } from "@heroicons/react/solid";
import { Spinner } from '../components/loading/spinner';

const LockClosedIconButton = () => {
  return (
    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
      <LockClosedIcon className="h-5 w-5 text-gray-900 group-hover:text-opacity-90" aria-hidden="true" />
    </span>
  )
}

const LoadingIconButton = () => {
  return (
    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
      <Spinner insideButton={true} color={'black'} aria-hidden="true" />
    </span>
  )
}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (<>
    <div className="fixed w-full h-full top-0 right-0 bg-animated-landing-background bg-cover" /> {/* bg-gray-900 */}
    <div className="fixed w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/images/difoccus-logo.png"
            alt="Difoccus"
          />
          <h2 className="mt-4 text-center text-3xl font-extralight text-white">Acesse a sua conta</h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Vivencie a sua formatura antes, durante e depois.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <a
                onClick={() => setIsLoading(true)}
                href='/api/auth/login'
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-opacity-90 focus:outline-none hover:no-underline"
              >
                {!isLoading && <LockClosedIconButton />}
                {isLoading && <LoadingIconButton />}
                Entrar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default LoginPage;
