import { ECommand } from "./enums";

type BaseType = {
  created_at: string;
  updated_at: string;
};

export type PageType = {
  label: string;
  path: string;
};

export type KeyWord = BaseType & {
  id: string;
  text: string;
  revision_id: string | null;
};

export type MessageContent = BaseType & {
  id: string;
  content: string;
  revision_id: string | null;
};

export type GroupType = BaseType & {
  id: string;
  type: string | null;
  revision_id: string | null;
  name: string | null;
  monitoring_status: boolean | null;
  status: boolean | null;
};

export type Bot = BaseType & {
  id: string;
  revision_id: string | null;
  name: string | null;
  password: string;
  fa_code: string;
  profile: string;
  status: boolean;
  is_logged_in: boolean;
};

export type User = BaseType & {
  uid: string;
  username: string;
  mess_number: number;
  latestMessageSentTime: string;
};

export type Thread = BaseType & {
  name?: string | null;
  status: string;
};

export type UpdateKeywordType = {
  text: string;
  id: string;
};

export type UpdateMessageType = {
  content: string;
  id: string;
};

export type UpdateBotType = {
  id: string;
  password: string;
  fa_code: string;
};

export type SettingsType = BaseType & {
  id: string;
  revision_id: string | null;
  bots: string[];
  pages: string[];
  keywords: string[];
  time_interval: number;
  command: ECommand;
};

export type CreateSettings = {
  bots: string[];
  pages: string[];
  keywords: string[];
  time_interval: number;
};
