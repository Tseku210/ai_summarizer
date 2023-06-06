import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const translateApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const translateApi = createApi({
  reducerPath: "translateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nlp-translation.p.rapidapi.com/v1/",
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/x-www-form-urlencoded");
      headers.set("X-RapidAPI-Key", translateApiKey);
      headers.set("X-RapidAPI-Host", "nlp-translation.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    translateText: builder.mutation({
      query: ({ text }) => ({
        url: "translate",
        method: "POST",
        body: `text=${encodeURIComponent(text)}&to=mn&from=en`,
      }),
    }),
  }),
});

export const { useTranslateTextMutation } = translateApi;
