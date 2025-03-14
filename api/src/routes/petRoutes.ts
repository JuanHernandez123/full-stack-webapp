import { Router, Request, Response, RequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import Pet from '../models/Pet';

const router = Router();

interface TypedRequestHandler<T = any> extends RequestHandler<
  ParamsDictionary,
  any,
  T,
  ParsedQs,
  Record<string, any>
> {}

// Create a new pet
const createPet: TypedRequestHandler = async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).send(pet);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all pets
const getAllPets: TypedRequestHandler = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).send(pets);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a pet by ID
const getPetById: TypedRequestHandler = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      res.status(404).send();
      return;
    }
    res.status(200).send(pet);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a pet by ID
const updatePet: TypedRequestHandler = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!pet) {
      res.status(404).send();
      return;
    }
    res.status(200).send(pet);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a pet by ID
const deletePet: TypedRequestHandler = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) {
      res.status(404).send();
      return;
    }
    res.status(200).send(pet);
  } catch (error) {
    res.status(500).send(error);
  }
};

router.post('/pets', createPet);
router.get('/pets', getAllPets);
router.get('/pets/:id', getPetById);
router.patch('/pets/:id', updatePet);
router.delete('/pets/:id', deletePet);

export { router as default };