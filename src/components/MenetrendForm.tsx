import React, { useState } from 'react';

interface CreateMenetrendDto {
  from: string;
  to: string;
  time: string;
  start: string; // New field for departure time
}

interface MenetrendFormProps {
  onReload: () => void;
}
  
const MenetrendForm: React.FC<MenetrendFormProps> = ({ onReload }) => {
  const [formData, setFormData] = useState<CreateMenetrendDto>({
    from: '',
    to: '',
    time: '',
    start: '' // Initialize the new field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/menetrend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        console.error('Error adding new schedule:', response.statusText);
        return;
      }
      // If successful, reload the menetrend list
      onReload();
      // Clear form data
      setFormData({ from: '', to: '', time: '', start: '' });
    } catch (error) {
      console.error('Error adding new schedule:', error);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'from') {
      setFormData(prevState => ({
        ...prevState,
        to: value === 'Kerekerdő-felső' ? 'Kerekerdő-alsó' : 'Kerekerdő-felső'
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Honnan:
        <select name="from" value={formData.from} onChange={handleSelectChange}>
          <option value=""/>
          <option value="Kerekerdő-felső">Kerekerdő-felső</option>
          <option value="Kerekerdő-alsó">Kerekerdő-alsó</option>
        </select>
      </label>
      <label className='m-5'>
        Hová:
        <input type="text" name="to" value={formData.to} readOnly />
      </label>
      <label className='m-5' >
        Mennyi idő:
        <input type="time" name="time" value={formData.time} onChange={handleInputChange} />
      </label>
      <label >
        Indulási idő:
        <input type="time" name="start" value={formData.start} onChange={handleInputChange} />
      </label>
      <button className='m-5' type="submit">Járat Hozzáadása</button>
    </form>
  );
};

export default MenetrendForm;
