import { LockClosedIcon } from "@heroicons/react/solid";

const LoginPage = () => {
  return (
    <div className="fixed w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-md w-full">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/images/difoccus-logo.png"
            alt="Difoccus"
          />
          <h2 className="mt-4 text-center text-3xl font-extralight text-white">Acesse a sua conta</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Vivencie a sua formatura antes, durante e depois.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <a
                href='/api/auth/login'
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-dark-800 bg-white hover:bg-opacity-90 focus:outline-none"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white0 group-hover:text-opacity-90" aria-hidden="true" />
                </span>
                Entrar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
