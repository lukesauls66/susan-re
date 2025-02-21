export interface BuyerType {
  propertyType: string;
  timeFrame: number;
  zipCode: string;
  rooms: number;
  priorities: string[];
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  consent: boolean;
}
