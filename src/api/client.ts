export const API_BASE =
  process.env.REACT_APP_API_BASE || "http://127.0.0.1:8000";


export async function fetchJSON(endpoint: string) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("[API Error]", err);
    return null;
  }
}
