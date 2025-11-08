import React, { useEffect, useState } from "react";
import { fetchJSON } from "../api/client";

// we don't know the exact shape from /api/dynamic/{service},
// so we keep it generic
export const Flows: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      // call an existing route
      const result = await fetchJSON("/api/dynamic/notion");
      setData(result);
    })();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Flows</h1>
      <p>This is pulling from /api/dynamic/notion on the backend.</p>
      {!data && <p>Loading…</p>}
      {data && (
        <pre
          style={{
            background: "#f5f5f5",
            padding: "1rem",
            borderRadius: "8px",
            marginTop: "1rem",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};
