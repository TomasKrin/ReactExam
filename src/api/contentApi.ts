import { Content, NewContent } from "../types/content";

import { MAIN_URL } from "../consts/BaseUrl";
import axios from "axios";

const CONTENT_URL = `${MAIN_URL}v1/content/skills`;

export const fetchContent = (token: string | null): Promise<Content[]> => {
  return axios
    .get(CONTENT_URL, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const addContent = (content: NewContent, token: string | null) => {
  return axios
    .post(CONTENT_URL, content, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response);
};
