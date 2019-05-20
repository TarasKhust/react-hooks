import React, { useState, useEffect } from 'react';

import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const Search = () => {
  const [location, setLocation] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animals', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
    console.log(animals)
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds }) => {
      const breedstrings = breeds.map(({ name }) => name);
      setBreeds(breedstrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);
  return (
    <div className="search-params">
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={event => {
          event.preventDefault();
          requestPets()
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            value={location}
            placeholder={location}
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
