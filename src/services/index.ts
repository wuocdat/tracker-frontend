import {
  KeyWord,
  updateKeywordType,
  MessageContent,
  updateMessageType,
} from "../types";
import { api } from "./api";
import { API_URL } from "./path";

const getKeywords = () => {
  return api.get<KeyWord[]>(API_URL.keyWords);
};

const createNewKeyword = (data: { text: string }) => {
  return api.post(API_URL.keyWords, data);
};

const updateKeyword = (data: updateKeywordType) => {
  return api.put(API_URL.keyWords, data);
};

const deleteKeyword = (params: string) => {
  return api.delete(`${API_URL.keyWords}${params}`);
};

const getMessages = () => {
  return api.get<MessageContent[]>(API_URL.messages);
};

const createMessgage = (data: { content: string }) => {
  return api.post(API_URL.messages, data);
};

const updateMessage = (data: updateMessageType) => {
  return api.put(API_URL.messages, data);
};

const deleteMessage = (params: string) => {
  return api.delete(`${API_URL.messages}${params}`);
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
