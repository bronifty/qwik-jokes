import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ headers, method, query, json }) => {
  headers.set("Cache-Control", "private");
  if (query.get("format") === "json" || method === "POST") {
    json(200, { message: "Hello World" });
  }
};

export default component$(() => {
  return <h1>Hello World</h1>;
});
