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
      <p id="server-time">Server time: {serverTime.value}</p>
      <p>Send me location: {loc.isNavigating ? "true" : "false"}</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        qui reiciendis placeat assumenda. Facere, repudiandae optio, quisquam
        incidunt cupiditate magnam consequatur iure itaque eligendi quibusdam
        possimus nobis ratione perferendis.
      </p>
      <p id="test">test</p>
    </div>
  );
});
