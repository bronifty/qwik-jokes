[code raiders qwik full stack saas](https://coderaiders.com/site/view?pkgId=35)
[youtube series](https://www.youtube.com/watch?v=zLHYDY9dAbs&list=PLkswEDcfBXYcl1gW7L5zyCVF9LpGhlOqu)
[code raiders setup reference](https://coderaiders.com/site/view?pkgId=35)

```bash
npm ci
touch .env
```

```bash
SUPABASE_URL=your-supabase-url
SUPABASE_SECRET_KEY=your-supabase-secret-key
```

### Routing

- named pages do not work. Named component imports are fine, but the pages need to all be index.ts (for endpoints) or tsx for pages
- **`[id]`** is a directory that represents a dynamic route segment, in this example `id` is the string parameter accessible by `useLocation().params.id`.
- **`[...catchall]`** is a directory that represents a dynamic catch-all route, in this example `catchall` is the string parameter accessible by `useLocation().params.catchall`.
- **`index.tsx|mdx` files** are the pages/endpoints/middleware.
- **`layout.tsx` files** are the layouts.

```
src/routes/blog/index.tsx → /blog

src/routes/user/[username]/index.tsx → /user/:username (/user/foo)

src/routes/post/[...all]/index.tsx → /post/* (/post/2020/id/title)
```

- url segment is state
  - eg src/routes/user/[username]/index.tsx returns 'username' as the result of a call to useLocation.params which is the key and the value is whatever you visit in the url at the location
    - eg localhost/user/foo will return 'foo' as the value mapped to useLocation.params.username

```ts
// src/routes/user/[username]/index.tsx
import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();
  return <div>Hello {loc.params.username}!</div>;
});
```

Inside the `src/routes` directory, all files named `index` are considered pages/endpoint/middleware, Qwik supports the following extensions: `.ts`, `.tsx`, `.md` and `.mdx`.

### Page Endpoint Middleware

Pages/endpoint/middleware are the leaf nodes of the routing tree, ie, **the modules that will handle the request and return an HTTP response**.

### Page index.tsx

- When `index.tsx` or `index.ts` exports a Qwik component as the default export, Qwik City will render the component and return an HTML response as a webpage.
  - tsx/md[x] are for pages, ts is for endpoints and middleware

```ts
// src/routes/index.tsx

import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return <h1>Hello World</h1>;
});
```

### Endpoint.ts

- tsx/md[x] are for pages, ts is for endpoints and middleware
- A `index.ts` can also access the HTTP request directly and return a raw HTTP response without involving any Qwik Component. This is done by exporting an `onRequest` method or `onGet`, `onPost`, `onPut`, `onDelete` depending on if you only want to handle a specific request given its HTTP method.

```ts
// src/routes/index.ts
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = ({ json }) => {
  json(200, { message: "Hello World" });
};
```

- Notice that in the last example, there is no default export. This is because we are not rendering a Qwik component, but rather we are handling the request directly and returning a JSON response. This is useful to implement RESTful APIs or any other type of HTTP endpoint.

### Page + Endpoint

- needs to be a tsx file if it's rendering typed jsx but a tsx file can also resolve json as an endpoint
- the following file will return the html or json response, depending on whether the query param format=json is appended to the url

```tsx
// src/routes/endpoints/index.tsx
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
```

- GET http://45.79.208.40:5173/endpoints/?format=json or POST http://45.79.208.40:5173/endpoints/ returns

```json
{ "message": "Hello World" }
```

- http://45.79.208.40:5173/endpoints/ returns

```html
# Hello World [Made with ♡ by
Builder.io2023-08-15T19:04:22.698Z](https://www.builder.io/)
```

### Layout Files

picture a dashboard site where all the pages are under the `/admin/*` directory:

- **Shared request handling:** The request cookies need to be validated before even rendering the page, otherwise, render a blank 401 page.
- **Shared UI:** All pages share a common header showing the user's name and profile picture.

Instead of repeating the same code in each route, we can use layouts to automatically reuse common parts, and also to add middleware to the route.

```ts
src / routes / admin / layout.tsx; // layout for admin module
index.tsx;
layout.tsx; // layout for shell
index.tsx;
```

### Middleware Layouts

Since layouts can implement request handling with `onRequest` or `onGet`, `onPost`, `onPut`, `onDelete`, they can be used to implement middleware, for example, to validate the request cookies before rendering the page.

For the route `https://example.com/admin`, the `onRequest` methods will be executed in the following order:

1. `src/routes/layout.tsx`'s `onRequest`
2. `src/routes/admin/layout.tsx`'s `onRequest`
3. `src/routes/admin/index.tsx`'s component

### Nested layouts

Layouts also **provide a way to add common UI to the rendered page**. For example, if we want to add a common header to all the routes, we can add a `Header` component to the root layout.

For the given example, the Qwik components will be rendered in the following order:

1. `src/routes/layout.tsx`'s component
2. `src/routes/admin/layout.tsx`'s component
3. `src/routes/admin/index.tsx`'s component

```
<RootLayout>
	<AdminLayout>
	<AdminPage />
	</AdminLayout>
</RootLayout>
```

## SPA Navigation

With Qwik, the distinction between MPA and SPA disappears; every app can be both at the same time. The choice is no longer an architectural design determined at the beginning of the project, instead this decision can be made for every link.

Qwik provides a `<Link>` component and `useNavigate()` hook. These can be used to initiate an SPA refresh or navigation between pages.

The `Link` component is the recommend way to navigate as it uses the HTML `<a>` tag, which is the most accessible way to move between pages. However, if you need to navigate programmatically, you can use the `useNavigate()` hook.

```ts
import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  return (
    <div>
      <Link href="/about">About (prefered)</Link>
      <button onClick$={() => nav("/about")}>About</button>
    </div>
  );
});
```

> The `Link` component uses the `useNavigate()` hook internally.

### Refreshing

The `Link` with the `reload` prop can be used to refresh the current page. You can also call the `nav()` function from the `useNavigate()` hook, without arguments.

```ts
import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, useNavigate } from "@builder.io/qwik-city";

export const useServerTime = routeLoader$(() => {
  // This will re-execute in the server when the page refreshes.
  return Date.now();
});

export default component$(() => {
  const nav = useNavigate();
  const serverTime = useServerTime();
  return (
    <div>
      <Link reload>Refresh (better accesibility)</Link>
      <button onClick$={() => nav()}>Refresh</button>
      <p>Server time: {serverTime.value}</p>
    </div>
  );
});
```

> When the page refreshes, all the matching `routeLoader$` and server handlers (`onRequest`) will re-execute in the server and the UI will re-render accordingly.

> While refreshing the page, the `isNavigating` boolean from `useLocation()` will be `true` until the page is fully rendered.
