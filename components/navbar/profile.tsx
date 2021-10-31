import { useEffect, Fragment } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { Menu, Transition } from '@headlessui/react';

const navigation = [
  { name: 'Cursos', href: '/programs' },
  { name: 'Sair', href: '/api/auth/logout' },
]

export const Profile = () => {
  const { user } = useUser();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Abrir menu de usuário</span>
          <img
            className="h-8 w-8 rounded-full"
            src={user && user.picture ? user.picture : 'imagers/no-pic.png'}
            alt="Miniatura de foto do usuário"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {navigation.map(item => (
            <Menu.Item key={item.href}>
              <a
                href={item.href}
                className={'block px-4 py-2 text-sm text-gray-700'}
              >
                {item.name}
              </a>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
