import React from 'react';
import { FaMosque, FaMicrophone } from 'react-icons/fa';

const ImageLayout = React.forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px', backgroundColor: '#4e0176', color: 'white', borderRadius: '10px', width: '800px' }}>
      <h1>Details of Jumua Sermons</h1>
      <p>{data.date}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {data.mosques.map((mosque, index) => (
          <div key={index} style={{ backgroundColor: '#712b90', padding: '10px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <FaMosque size={24} />
            <h3>{mosque.name}</h3>
            <FaMicrophone size={20} />
            <p>{mosque.speaker}</p>
            <p>({mosque.designation})</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ImageLayout;
