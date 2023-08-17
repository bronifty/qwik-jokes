import { component$ } from "@builder.io/qwik";
import {
  Link,
  routeLoader$,
  useNavigate,
  useLocation,
} from "@builder.io/qwik-city";

export const useServerTime = routeLoader$(() => {
  // This will re-execute in the server when the page refreshes.
  return Date.now();
});

export default component$(() => {
  const nav = useNavigate();
  const serverTime = useServerTime();
  const loc = useLocation();

  return (
    <div>
      <Link reload>Refresh (better accesibility)</Link>
      <button onClick$={() => nav()}>Refresh</button>
      <p>Server time: {serverTime.value}</p>
      <p>Send me location: {loc.isNavigating ? "true" : "false"}</p>
    </div>
  );
});
