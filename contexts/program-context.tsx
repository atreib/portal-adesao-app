import { createContext, ReactChild, ReactChildren, useState } from 'react';
import { IProgram } from '../models/program';

interface ComponentProps {
  children: ReactChild | ReactChildren;
}

type ProviderType = {
  programs: IProgram[];
  selectedProgram: IProgram | undefined;
  addProgram: (program: IProgram) => void;
  selectProgram: (program: IProgram) => void;
};

const initialValues: ProviderType = {
  programs: [],
  selectedProgram: undefined,
  addProgram: () => null,
  selectProgram: () => null,
};

const ProgramContext = createContext<ProviderType>(initialValues);

const ProgramProvider = ({ children }: ComponentProps) => {
  const [programs, setPrograms] = useState<IProgram[] | undefined>(undefined);
  const [selectedProgram, setSelectedProgram] = useState<IProgram | undefined>(undefined);

  const addProgram = (program: IProgram) => {
    if (!programs?.find(x => x.id === program.id)) {
      const allPrograms = programs ? [...programs, program] : [program];
      setPrograms(allPrograms);
    }
  }

  const selectProgram = (program: IProgram) => {
    setSelectedProgram(program);
  }

  return <ProgramContext.Provider value={{
    programs,
    addProgram,
    selectedProgram,
    selectProgram
  }}>
    {children}
  </ProgramContext.Provider>
};

export { ProgramProvider, ProgramContext };
