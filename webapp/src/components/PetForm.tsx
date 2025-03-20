import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Pet } from '../types/pet';

interface PetFormProps {
  petToEdit?: Pet | null;
  onSuccess?: () => void;
}

const PetForm: React.FC<PetFormProps> = ({ petToEdit, onSuccess }) => {
  const [pet, setPet] = useState<Partial<Pet>>({
    name: '',
    age: undefined,
    type: '',
    owner: '',
  });
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (petToEdit) {
      setPet(petToEdit); // Populate form with petToEdit data
    } else {
      setPet({ name: '', age: undefined, type: '', owner: '' }); // Reset form
    }
  }, [petToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPet(prev => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value, // Convert `age` to a number
    }));
  };

  const handleCreate = async () => {
    try {
      const newPet = {
        name: pet.name as string,
        age: pet.age as number,
        type: pet.type as string,
        owner: pet.owner as string,
      };
      await api.createPet(newPet);
      setError('');
      setPet({ name: '', age: undefined, type: '', owner: '' });
      if (onSuccess) onSuccess();
    } catch (err) {
      setError('Failed to create pet');
    }
  };

  const handleUpdate = async () => {
    try {
      if (petToEdit && petToEdit._id) {
        await api.updatePet(petToEdit._id, pet);
        setError('');
        setPet({ name: '', age: undefined, type: '', owner: '' });
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      setError('Failed to update pet');
    }
  };

  return (
    <form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={pet.name || ''}
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
          value={pet.age ?? ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={pet.type || ''}
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
          value={pet.owner || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <button type="button" onClick={handleCreate} disabled={!!petToEdit}>
          Create
        </button>
        <button type="button" onClick={handleUpdate} disabled={!petToEdit}>
          Update
        </button>
      </div>
    </form>
  );
};

export default PetForm;