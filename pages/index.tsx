import type { NextPage } from 'next';
import { useState } from 'react';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const [steamId, setSteamId] = useState('');
  const [banReason, setBanReason] = useState('');
  const { data, isLoading } = trpc.useQuery(['appeal.getAppealStatus', { steamId }]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit appeal');
  };

  return (
    <div>
      <h1>Steam Appeal Process Automator</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={steamId} onChange={(event) => setSteamId(event.target.value)} placeholder="Steam ID"/>
        <input type="text" value={banReason} onChange={(event) => setBanReason(event.target.value)} placeholder="Ban Reason"/>
        <button type="submit">Submit Appeal</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Appeal Status: {data?.status}</p>
      )}
    </div>
  );
};

export default Home;