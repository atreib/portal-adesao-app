import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useContext } from 'react';
import { Navbar } from '../components/navbar';
import { LoadingPage } from '../components/pages/loading';
import { ProgramContext } from '../contexts/program-context';

const DashboardPage = () => {
  const { selectedProgram } = useContext(ProgramContext);

  return (<>
    <div className="fixed w-full h-full top-0 right-0 bg-gray-100"></div>
    <Navbar />
    <div className={`relative w-full flex pb-32 px-4 md:px-8 lg:px-32`}>
      { selectedProgram.name }
    </div>
  </>);
};

export default withPageAuthRequired(DashboardPage, {
  onRedirecting: () => <LoadingPage />,
  onError: (error) => <h1>{error}</h1>
});
