import { ISchool } from "./school";

export interface IProgram {
  id: string | number;
  password: string;
  name: string;
  school: ISchool;
  year: number;
  semester: number;
  expirationDate: string;
}
