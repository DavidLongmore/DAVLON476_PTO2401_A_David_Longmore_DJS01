/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Converted units within the function call and added the OR to make it more robust
const calcNewVel = (vel, acc, time) => {
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
    throw new Error("Invalid input: vel, acc, and time should be numbers.");
  }
  return vel + (acc * 12960 * (time / 3600));
};

// Calculate new velocity directly
const vel2 = calcNewVel(vel, acc, time);

// Calculate new distance
const d2 = d + (vel * (time / 3600)); // Devided the time by 3600 which is the total seconds in an hour

// Calculate remaining fuel 
const rf = fuel - (fbr * time); // added the fuel subtract by the burn rate multiplied by the time

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
