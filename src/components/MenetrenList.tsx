import React, { useState, useEffect } from 'react';

interface Menetrend {
  id: number;
  from: string;
  to: string;
  time: string;
  start: string; 
}

interface MenetrenListProps {
  reload: boolean;
}

const MenetrenList: React.FC<MenetrenListProps> = ({ reload }) => {
  const [menetrend, setMenetrend] = useState<Menetrend[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/menetrend');
        if (!response.ok) {
          throw new Error('Failed to fetch menetrend');
        }
        const data: Menetrend[] = await response.json();
       
        data.sort((a, b) => (a.start > b.start ? 1 : -1));
        setMenetrend(data); 
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchData();
  }, [reload]);

  return (
    <div>
      <h2>Menetrend a Hét minden napján azonos</h2>
      <ul>
        {menetrend.map(schedule => (
          <li key={schedule.id}>
            {schedule.from} - {schedule.to}: Menetidő :{schedule.time}, Indulási idő: {schedule.start}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenetrenList;
