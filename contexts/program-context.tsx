import { createContext, ReactChild, ReactChildren, useState } from 'react';
import { IProgram } from '../models/program';

interface ComponentProps {
  children: ReactChild | ReactChildren;
}

type ProviderType = {
  programs: IProgram[];
  addProgram: (program: IProgram) => void;
};

const initialValues: ProviderType = {
  programs: [],
  addProgram: () => null,
};

const ProgramContext = createContext<ProviderType>(initialValues);

const ProgramProvider = ({ children }: ComponentProps) => {
  const [programs, setPrograms] = useState<IProgram[]>([]);

  const addProgram = (program: IProgram) => {
    if (!programs.find(x => x.id === program.id)) setPrograms([...programs, program]);
  }

  return <ProgramContext.Provider value={{
    programs,
    addProgram
  }}>
    {children}
  </ProgramContext.Provider>
};

export { ProgramProvider, ProgramContext };
