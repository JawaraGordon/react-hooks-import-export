import React from 'react';
import thisManyParks from './parks/howManyParks';

function ColoradoStateParks() {
  thisManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
