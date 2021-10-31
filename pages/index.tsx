import { useUser } from '@auth0/nextjs-auth0';

const Home = () => {
  const { user, error, isLoading } = useUser();

  return (<>
    <h1>Index</h1>
    {user && <h2>{user.name}</h2>}
    <ul>
      {isLoading && <li>Loading...</li>}
      {!user && <li><a href="/api/auth/login">Login</a></li>}
      {user && <li><a href="/api/auth/logout">Logout</a></li>}
      {error && <li>{error.message}</li>}
    </ul>
  </>)
}

export default Home;
