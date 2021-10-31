import { useUser } from '@auth0/nextjs-auth0';
import { LoadingPage } from '../components/pages/loading';
import ProgramsPage from './programs';
import LoginPage from './login';

const Index = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <LoadingPage />;
  if (!user) return <LoginPage />;
  return <ProgramsPage user={user} />;
};

export default Index;
