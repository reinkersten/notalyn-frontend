import React, { useEffect, useState } from "react";
import { fetchJSON } from "../api/client";

type TokenStatus = {
  notion?: string;
  supabase?: string;
  mailgun?: string;
  [key: string]: string | undefined;
};

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<TokenStatus | null>(null);

  useEffect(() => {
    (async () => {
      const result = await fetchJSON("/api/tokens/status");
      setData(result);
    })();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <p>Live token status from backend:</p>
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
