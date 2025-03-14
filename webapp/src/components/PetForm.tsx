import React, { useState } from 'react';
import { api } from '../services/api';

interface PetFormProps {
  onSuccess?: () => void;
}

const PetForm: React.FC<PetFormProps> = ({ onSuccess }) => {
  const [pet, setPet] = useState({
    name: '',
    age: '',
    type: '',
    owner: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPet(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.createPet({
        ...pet,
        age: Number(pet.age),
      });
      setPet({ name: '', age: '', type: '', owner: '' });
      setError('');
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError('Failed to create pet');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={pet.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={pet.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={pet.type}
          onChange={handleChange}
          required
        >
          <option value="">Select type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
      </div>
      <div>
        <label htmlFor="owner">Owner:</label>
        <input
          type="text"
          id="owner"
          name="owner"
          value={pet.owner}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PetForm;