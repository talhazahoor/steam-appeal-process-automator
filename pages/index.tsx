import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [appealReason, setAppealReason] = useState('');
  const [banReason, setBanReason] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Appeal reason: ${appealReason}`);
    console.log(`Ban reason: ${banReason}`);
  };

  return (
    <div>
      <h1>Steam Appeal Process Automator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Appeal reason:
          <input type="text" value={appealReason} onChange={(event) => setAppealReason(event.target.value)} />
        </label>
        <label>
          Ban reason:
          <input type="text" value={banReason} onChange={(event) => setBanReason(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;