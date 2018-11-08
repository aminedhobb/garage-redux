export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CAR = 'CREATE_CAR';

export function fetchCars() {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/theblob/cars')
    .then(r => r.json());
  return {
    type: FETCH_CARS,
    payload: promise
  }
}

export function createCar(body, callback) {
  const request = fetch("https://wagon-garage-api.herokuapp.com/theblob/cars", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(callback);

    return {
      type: POST_CREATED,
      payload: request
    };
}
