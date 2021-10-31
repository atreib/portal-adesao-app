import { IProgram } from "../models/program";
import { IStudent } from "../models/student";
import { MATCH_PROGRAM_STUDENT } from "./__mocks__/programs";

export const matchProgramStudent =
  (documentNumber: string, programPass: string): { student: IStudent, program: IProgram } => {
    return MATCH_PROGRAM_STUDENT;
  };
