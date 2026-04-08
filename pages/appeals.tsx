import { useState, useEffect } from 'react';
import { db } from '../lib/db';

export default function Appeals() {
  const [appeals, setAppeals] = useState([]);

  useEffect(() => {
    const fetchAppeals = async () => {
      const appealsCollection = db.collection('appeals');
      const appealsData = await appealsCollection.find().toArray();
      setAppeals(appealsData);
    };
    fetchAppeals();
  }, []);

  return (
    <div>
      <h1>Appeals</h1>
      <ul>
        {appeals.map((appeal) => (
          <li key={appeal._id}>{appeal.appealReason}</li>
        ))}
      </ul>
    </div>
  );
}