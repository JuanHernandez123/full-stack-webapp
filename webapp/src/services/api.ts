import { Pet, PetResponse } from '../types/pet';

export const api = {
    async createPet(pet: Omit<Pet, '_id'>): Promise<PetResponse> {
        const response = await fetch('http://localhost:3001/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pet),
        });
        if (!response.ok) {
            throw new Error('Failed to create pet');
        }
        return response.json();
    },

    async getAllPets(): Promise<PetResponse[]> {
        const response = await fetch('http://localhost:3001/pets');
        if (!response.ok) {
            throw new Error('Failed to fetch pets');
        }
        return response.json();
    },
  
    async updatePet(id: string, pet: Partial<Pet>): Promise<Pet> {
      const response = await fetch(`http://localhost:3001/pets/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet),
      });
      if (!response.ok) {
        throw new Error('Failed to update pet');
      }
      return response.json();
    },
  
    async deletePet(id: string): Promise<void> {
      const response = await fetch(`http://localhost:3001/pets/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete pet');
      }
    },
  };