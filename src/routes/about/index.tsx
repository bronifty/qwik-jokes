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
