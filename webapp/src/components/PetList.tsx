import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { PetResponse } from '../types/pet';
import PetForm from './PetForm';

const PetList: React.FC = () => {
  const [pets, setPets] = useState<PetResponse[]>([]);
  const [error, setError] = useState<string>('');
  const [petToEdit, setPetToEdit] = useState<PetResponse | null>(null);

  const fetchPets = async () => {
    try {
      const data = await api.getAllPets();
      setPets(data);
    } catch (err) {
      setError('Failed to fetch pets');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deletePet(id);
      setPets(pets.filter(pet => pet._id !== id));
    } catch (err) {
      setError('Failed to delete pet');
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div>
      <h2>Pet Info</h2>
      <PetForm petToEdit={petToEdit} onSuccess={fetchPets} />
      <h2>Pets List</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Age</th>
            <th style={headerStyle}>Type</th>
            <th style={headerStyle}>Owner</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map(pet => (
            <tr key={pet._id}>
              <td style={cellStyle}>{pet.name}</td>
              <td style={cellStyle}>{pet.age}</td>
              <td style={cellStyle}>{pet.type}</td>
              <td style={cellStyle}>{pet.owner}</td>
              <td style={cellStyle}>
                <button onClick={() => setPetToEdit(pet)}>Edit</button>
                <button onClick={() => handleDelete(pet._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>      
    </div>
  );
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse', // Fixed typing issue
  marginTop: '20px',
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#f4f4f4',
  padding: '10px',
  textAlign: 'left',
  borderBottom: '2px solid #ddd',
};

const cellStyle: React.CSSProperties = {
  padding: '8px',
  borderBottom: '1px solid #ddd',
};

export default PetList;