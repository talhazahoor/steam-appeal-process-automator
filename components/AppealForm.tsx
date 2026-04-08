import type { React } from 'react';

interface AppealFormProps {
  appealReason: string;
  banReason: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AppealForm: React.FC<AppealFormProps> = ({ appealReason, banReason, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>
      Appeal reason:
      <input type="text" value={appealReason} />
    </label>
    <label>
      Ban reason:
      <input type="text" value={banReason} />
    </label>
    <button type="submit">Submit</button>
  </form>
);

export default AppealForm;