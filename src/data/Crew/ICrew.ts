import { BaseInfo } from "../shared";

export interface IMember extends BaseInfo {
  role: string;
}

export type ICrew = IMember[]
