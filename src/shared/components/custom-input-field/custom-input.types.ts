import { ChangeEvent } from "react";

export enum CustomInputType {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  URL = "url",
}

export interface CustomInputProps {
  name?: string;
  placeholder?: string;
  type: CustomInputType;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  className?: string;
  required?: boolean;
}
