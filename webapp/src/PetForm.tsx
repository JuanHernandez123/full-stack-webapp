import React, { useState } from 'react';

const PetForm: React.FC = () => {
  const [pet, setPet] = useState({
    name: '',
    age: '',
    type: '',
    owner: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPet({
      ...pet,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log('Pet data submitted:', pet);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={pet.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={pet.age} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <select id="type" name="type" value={pet.type} onChange={handleChange}>
          <option value="">Select type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
      </div>
      <div>
        <label htmlFor="owner">Owner:</label>
        <input type="text" id="owner" name="owner" value={pet.owner} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PetForm;