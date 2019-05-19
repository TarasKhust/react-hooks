import React, { useState } from 'react';

import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const Search = () => {
  const [location, setLocation] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animals', 'dog', ANIMALS);
  const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);
  return (
    <>
      <div className="search-params">
        <form style={{ display: 'flex', flexDirection: 'column' }}>
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
    </>
  );
};

export default Search;
