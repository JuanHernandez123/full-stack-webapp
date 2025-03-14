export interface Pet {
    _id?: string;  // Make _id optional for new pets
    name: string;
    age: number;
    type: string;
    owner: string;
}

export interface PetResponse extends Pet {
    _id: string;  // _id is required for existing pets
}