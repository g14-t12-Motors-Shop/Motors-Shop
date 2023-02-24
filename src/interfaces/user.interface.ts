import { FieldValues, SubmitHandler } from "react-hook-form";
import { IAddress } from "./address.interface";
import { ILoginDataProps } from "./login.interface";
import { ReactNode } from "react";

export interface IContextProps {
  children: ReactNode;
}

export interface IUser {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  description: string;
  address: IAddress;
  accountType: string;
  id: string;
  isAdm: boolean;
  password: string;
}
  
export interface IRegisterUserForm {
  registerUserSubmit: SubmitHandler<FieldValues>;
}

export interface IRegisterForm {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  description: string;
  zipCode: string;
  state: string;
  city: string;
  street: string;
  number?: number | null;
  complement?: string | null;
  accountType: string;
  password: string;
  passwordConfirmation: string;
}
  
export interface IRequestRegisterForm {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  description: string;
  address: IAddress;
  accountType: string;
  password: string;
  isAdm: boolean;
}

export interface IUserContextProviderValues {
  logout: () => void;
  loginData: (data: ILoginDataProps) => void;
  toRegister: () => void;
  user: IUser | null;
  signUp: (data: IRegisterForm) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}