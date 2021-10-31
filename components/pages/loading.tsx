import { Spinner } from "../loading/spinner";

export const LoadingPage = () => (
  <div className='fixed w-full h-full bg-gray-900 flex flex-col items-center justify-center space-y-2'>
    <Spinner insideButton={false} color={'white'} />
  </div>
);
