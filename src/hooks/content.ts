import { addContent, fetchContent } from "../api/contentApi";
import { useMutation, useQuery } from "@tanstack/react-query";

import { AxiosResponse } from "axios";
import { NewContent } from "../types/content";

const CONTENT = "CONTENT";

type AddContentProps = {
  content: NewContent;
  token: string | null;
};

export const useContent = (token: string | null) => {
  return useQuery([CONTENT], () => fetchContent(token));
};

export const useAddContent = () => {
  return useMutation<AxiosResponse<any, any>, Error, AddContentProps>(
    [CONTENT],
    ({ content, token }: AddContentProps) => addContent(content, token)
  );
};
