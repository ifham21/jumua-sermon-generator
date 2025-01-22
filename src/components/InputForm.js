import React, { useState } from "react";

const mosqueNames = [
  "Grand Jummah Mosque",
  "Thaika Nagar Jummah Mosque",
  "Konawatta Jummah Mosque",
  "Masjidul Hudha Jummah Mosque Meenodaikattu",
  "Meelad Nagar Jummah Mosque",
  "Sambu Nagar Jummah Mosque",
  "Aalamkulam Jummah Mosque",
  "Masjidur Rahman Jummah Mosque",
  "Masjid Han-Lalath Ibn Aamir",
  "MASJIDUTH THA’WA (CIC)"
];

const InputForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    date: "",
    backgroundColor: "#4e0176", // Default background color
    mosques: mosqueNames.map(() => ({ speaker: "", designation: "" }))
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newMosques = [...formData.mosques];
    newMosques[index][name] = value;
    setFormData({ ...formData, mosques: newMosques });
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
      <label>
        Background Color:
        <input
          type="color"
          value={formData.backgroundColor}
          onChange={(e) => setFormData({ ...formData, backgroundColor: e.target.value })}
        />
      </label>
      {mosqueNames.map((name, index) => (
        <div key={index}>
          <h4>{name}</h4>
          <input
            name="speaker"
            placeholder="Speaker Name"
            value={formData.mosques[index].speaker}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            name="designation"
            placeholder="Designation"
            value={formData.mosques[index].designation}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
      <button type="submit">Generate Image</button>
    </form>
  );
};

export default InputForm;
