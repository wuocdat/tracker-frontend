import {
  KeyWord,
  UpdateKeywordType,
  MessageContent,
  UpdateMessageType,
  UpdateBotType,
  GroupType,
  Bot,
  User,
  SettingsType,
  CreateSettings,
} from "../types";
import { ECommand } from "../types/enums";
import { api } from "./api";
import { API_URL } from "./path";

const getKeywords = () => {
  return api.get<KeyWord[]>(API_URL.keyWords);
};

const createNewKeyword = (data: { text: string }) => {
  return api.post(API_URL.keyWords, data);
};

const updateKeyword = (data: UpdateKeywordType) => {
  return api.put(API_URL.keyWords, data);
};

const deleteKeyword = (params: string) => {
  return api.delete(`${API_URL.keyWords}/${params}`);
};

const getMessages = () => {
  return api.get<MessageContent[]>(API_URL.messages);
};

const createMessgage = (data: { content: string }) => {
  return api.post(API_URL.messages, data);
};

const updateMessage = (data: UpdateMessageType) => {
  return api.put(API_URL.messages, data);
};

const deleteMessage = (params: string) => {
  return api.delete(`${API_URL.messages}/${params}`);
};

const getPages = () => {
  return api.get<GroupType[]>(API_URL.pages);
};

const createPage = (data: { id: string }) => {
  return api.post(API_URL.pages, data);
};

const deletePage = (params: string) => {
  return api.delete(`${API_URL.pages}/${params}`);
};

const getBots = () => {
  return api.get<Bot[]>(API_URL.bots);
};

const updateBot = (data: UpdateBotType) => {
  return api.put(API_URL.bots, data);
};

const createBot = (data: UpdateBotType) => {
  return api.post(API_URL.bots, data);
};

const deleteBot = (params: string) => {
  return api.delete(`${API_URL.bots}/${params}`);
};

const getSettings = () => {
  return api.get<SettingsType | null>(API_URL.settings);
};

const putCommand = (command: ECommand) => {
  return api.put(`${API_URL.settings}/${command}`);
};

const postNewSetting = (data: CreateSettings) => {
  return api.post(API_URL.settings, data);
};

const getUsers = () => {
  return api.get<User[]>(API_URL.users);
};

export const SettingsService = {
  getSettings,
  putCommand,
  postNewSetting,
};

export const KeywordService = {
  getKeywords,
  createNewKeyword,
  updateKeyword,
  deleteKeyword,
};

export const MessageService = {
  getMessages,
  createMessgage,
  updateMessage,
  deleteMessage,
};

export const PageService = {
  getPages,
  createPage,
  deletePage,
};

export const BotService = {
  getBots,
  updateBot,
  createBot,
  deleteBot,
};

export const UserService = {
  getUsers,
};
