import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Navbar } from '../components/navbar';
import { LoadingPage } from '../components/pages/loading';
import { ProgramsForm } from '../components/pages/programs/form';

const ProgramsPage = () => {
  return (<>
    <div className="fixed w-full h-full top-0 right-0 bg-gray-100"></div>
    <Navbar />
    <div className={`relative w-full flex flex-col justify-center pb-32 px-4 md:px-8 lg:px-32`}>
      <div className={`w-full flex flex-col items-start py-4 lg:py-8`}>
        <h2 className="mt-4 text-left text-3xl font-extralight text-gray-900">Acessar meu curso</h2>
        <p className="mt-2 text-left text-sm text-gray-600">
          Digite o seu CPF e a senha do seu curso, ou selecione uma das opções{' '}
          <label className="hidden lg:inline-block">ao lado</label>
          <label className="inline-block lg:hidden">abaixo</label>
          :
        </p>
      </div>
      <div className={`w-full flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4`}>
        <div className="w-full lg:w-1/2">
          <ProgramsForm />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className='text-xl font-semibold'>Recentemente visitados:</h2>
          <p>Você ainda não acessou nenhum curso</p>
        </div>
      </div>
    </div>
  </>);
};

export default withPageAuthRequired(ProgramsPage, {
  onRedirecting: () => <LoadingPage />,
  onError: (error) => <h1>{error}</h1>
});
