export interface addUserInterface {
  name: string;
  email: string;
  avatar: File;
}
export interface userDataViewInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  bio: string;
  birthday: Date;
  isActive: boolean;
  phoneNumber: string;
  role: string;
  address: Address;
  preferences: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  city: string;
  street: string;
  zipCode: string;
}
