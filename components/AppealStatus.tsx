import type { React } from 'react';

interface AppealStatusProps {
  appealStatus: string;
}

const AppealStatus: React.FC<AppealStatusProps> = ({ appealStatus }) => (
  <div>
    <h2>Appeal Status</h2>
    <p>{appealStatus}</p>
  </div>
);

export default AppealStatus;