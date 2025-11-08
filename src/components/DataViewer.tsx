import React, { useEffect, useState } from "react";
import { API_BASE } from "../api/client"; // adjust path if needed

const DataViewer: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/dynamic/notion`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h2>Data Viewer</h2>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
    </div>
  );
};

export default DataViewer;
