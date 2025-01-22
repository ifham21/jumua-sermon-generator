import React, { useState } from 'react';

const InputForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    date: '',
    mosques: [{ name: '', speaker: '', designation: '' }],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newMosques = [...formData.mosques];
    newMosques[index][name] = value;
    setFormData({ ...formData, mosques: newMosques });
  };

  const addMosque = () => {
    setFormData({
      ...formData,
      mosques: [...formData.mosques, { name: '', speaker: '', designation: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="text"
          placeholder="Enter Date (e.g., 24th January 2025)"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </label>
      {formData.mosques.map((mosque, index) => (
        <div key={index}>
          <input
            name="name"
            placeholder="Mosque Name"
            value={mosque.name}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            name="speaker"
            placeholder="Speaker Name"
            value={mosque.speaker}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            name="designation"
            placeholder="Designation"
            value={mosque.designation}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
      <button type="button" onClick={addMosque}>Add Mosque</button>
      <button type="submit">Generate Image</button>
    </form>
  );
};

export default InputForm;
