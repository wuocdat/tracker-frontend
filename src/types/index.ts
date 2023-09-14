import { EAccType, EThreadStatus } from "./enums";

type BaseType = {
    created_at: string;
    updated_at: string;
};

export type PageType = {
    label: string;
    path: string;
};

export type KeyWord = BaseType & {
    _id: string;
    text: string;
    revision_id: string | null;
};

export type MessageContent = BaseType & {
    text: string;
};

export type GroupType = BaseType & {
    type: EAccType;
    uid: string;
};

export type Bot = BaseType & {
    uui: string;
    cookie: string;
    username: string;
    pass: string;
    _2fa: string;
    profile: string;
    status: string;
};

export type User = BaseType & {
    uid: string;
    username: string;
    mess_number: number;
    latestMessageSentTime: string;
};

export type Thread = BaseType & {
    name: string;
    status: EThreadStatus;
};
