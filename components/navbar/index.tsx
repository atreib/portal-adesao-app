
import { Profile } from "./profile";

export const Navbar = () => {
  return <div className={`relative z-10 top-0 w-full bg-gray-800 flex items-center justify-between py-4 px-4 md:px-8 lg:px-32`}>
    <img className="h-8" src="/images/difoccus-logo.png" alt="Difoccus" />
    <Profile />
  </div>;
};
