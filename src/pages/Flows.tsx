import React, { useEffect, useState } from 'react';
import { fetchJSON } from '../api/client';

interface FlowStep {
  id: string;
  content: string;
}

export const Flows: React.FC = () => {
  const [steps, setSteps] = useState<FlowStep[] | null>(null);

  useEffect(() => {
    (async () => {
      const result = await fetchJSON('/api/flow');
      setSteps(result?.steps || []);
    })();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Flows</h1>
      <p>This page pulls task flow data live from the backend.</p>
      {!steps && <p>Loading flow steps...</p>}
      {steps && steps.length > 0 && (
        <ol>
          {steps.map((s) => (
            <li key={s.id} style={{ marginBottom: '0.5rem' }}>
              {s.content}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
