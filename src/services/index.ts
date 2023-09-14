import { KeyWord } from "../types";
import { api } from "./api";
import { API_URL } from "./path";

const getKeywords = () => {
    return api.get<KeyWord[]>(API_URL.getKeywords);
};

export const KeywordService = {
    getKeywords,
};
