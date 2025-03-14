import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { PetResponse } from '../types/pet';

const PetList: React.FC = () => {
    const [pets, setPets] = useState<PetResponse[]>([]);
  const [error, setError] = useState<string>('');

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
        <h2>Pets List</h2>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
                <tr>
                    <th style={tableHeaderStyle}>Name</th>
                    <th style={tableHeaderStyle}>Age</th>
                    <th style={tableHeaderStyle}>Type</th>
                    <th style={tableHeaderStyle}>Owner</th>
                    <th style={tableHeaderStyle}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {pets.map(pet => (
                    <tr key={pet._id}>
                        <td style={tableCellStyle}>{pet.name}</td>
                        <td style={tableCellStyle}>{pet.age}</td>
                        <td style={tableCellStyle}>{pet.type}</td>
                        <td style={tableCellStyle}>{pet.owner}</td>
                        <td style={tableCellStyle}>
                            <button 
                                onClick={() => handleDelete(pet._id)}
                                style={deleteButtonStyle}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};

const tableHeaderStyle = {
backgroundColor: '#f4f4f4',
padding: '12px',
textAlign: 'left' as const,
borderBottom: '2px solid #ddd'
};

const tableCellStyle = {
padding: '8px',
borderBottom: '1px solid #ddd'
};

const deleteButtonStyle = {
backgroundColor: '#ff4444',
color: 'white',
border: 'none',
padding: '5px 10px',
borderRadius: '4px',
cursor: 'pointer'
};

export default PetList;