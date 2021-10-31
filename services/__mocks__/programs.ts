import { IProgram } from "../../models/program";
import { IStudent } from "../../models/student";

export const MATCH_PROGRAM_STUDENT: { student: IStudent, program: IProgram } = {
  student: {
    id: 10974,
    name: 'Andre Treib',
    baloon: 'Andre Treib',
    documentNumber: '861.910.710-00',
    email: 'andre.schumacher.treib@gmail.com',
    phone: '(51) 99683-2919',
    address: {
      streetName: 'Rua dos Maias',
      number: '1187',
      complement: 'Casa',
      district: 'Rubem Berta',
      postalCode: '91170-200',
    },
    observations: 'Lorem ipsum',
  },
  program: {
    id: 1,
    password: 'apuc211',
    name: 'Administração, Contábeis e Economia',
    school: {
      id: 1,
      name: 'Pontífica Lorem Ipsum',
      initials: 'PUCRS',
    },
    year: 2021,
    semester: 1,
    expirationDate: '2021-07-31'
  }
};
