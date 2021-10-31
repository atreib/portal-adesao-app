import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { LockClosedIcon } from "@heroicons/react/solid";
import { LoadingPage } from '../components/pages/loading';

const ProgramsPage = () => {
  return (
    <div className="fixed w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-md w-full">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/images/difoccus-logo.png"
            alt="Difoccus"
          />
          <h2 className="mt-4 text-center text-3xl font-extralight text-white">Escolher curso</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Digite o seu CPF e a senha do seu curso, ou selecione uma das opções abaixo:
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <a
                href='/api/auth/logout'
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-dark-800 bg-white hover:bg-opacity-90 focus:outline-none"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white0 group-hover:text-opacity-90" aria-hidden="true" />
                </span>
                Sair
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withPageAuthRequired(ProgramsPage, {
  onRedirecting: () => <LoadingPage />,
  onError: (error) => <h1>{error}</h1>
});
