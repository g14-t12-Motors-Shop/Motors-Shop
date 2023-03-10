import { IRegisterForm, IUser } from "./user.interface";
import { BaseSyntheticEvent, Dispatch, ReactNode, SetStateAction } from "react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { HeadersDefaults } from "axios";

export interface ILoginDataProps {
  email: string;
  password: string;
}

export interface ILoginDataResponse {
  user: IUser;
  token: string;
}

export interface ILoginContextValues {
  login: UseFormRegister<ILoginDataProps>;
  // register: UseFormRegister<IUser>;
  handleLoginValues: Function;
  handleForgotPasswordValues: Function;
  handleRegisterValues: (user: IUser) => void;
  // handleRegisterValues: (
  //   e?: BaseSyntheticEvent<object, any, any> | undefined
  // ) => Promise<void>;
  loginErrors: FieldErrors<ILoginDataProps>;
  // registerErrors: FieldErrors<IRegisterForm>;

  user: IUser | null;
  setUser: Function;
  loading: boolean;
  isModalSucessAccount: boolean;
  setIsModalSucessAccount: Dispatch<SetStateAction<boolean>>;
}

export interface IForgotPasswordForm {
  email: string;
  password: string;
  passwordConfirmation: string;
}
