import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  // This will used to resolve the <title> of the page
  title: "About page",
  meta: [
    {
      name: "description",
      content: "This is the about page",
    },
    // Open graph
    {
      property: "og:title",
      content: "About page",
    },
    {
      property: "og:description",
      content: "This is the about page",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://example.com/about",
    },
  ],
};

import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  return (
    <div>
      <div>
        <Link href="about">About</Link>
      </div>
      <br />
      <div>
        <Link href="test#test">Test</Link>
      </div>
      <button onClick$={() => nav("about")}>About</button>
    </div>
  );
});
