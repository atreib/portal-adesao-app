export interface IStudent {
  id: string | number;
  name: string,
  baloon: string,
  documentNumber: string,
  email: string,
  phone: string,
  address: {
    streetName: string,
    number: string,
    complement: string,
    district: string,
    postalCode: string,
  },
  observations: string,
}
