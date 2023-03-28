import { MAIN_URL } from "../consts/BaseUrl";
import { User } from "../types/user";
import axios from "axios";

const REGISTER_URL = `${MAIN_URL}v1/auth/register`;
const LOGIN_URL = `${MAIN_URL}v1/auth/login`;

export const registerUser = (user: User): Promise<User> => {
  return axios.post(REGISTER_URL, user).then((response) => response.data);
};

export const loginUser = (user: User) => {
  return axios.post(LOGIN_URL, user).then((response) => response.data.token);
};
