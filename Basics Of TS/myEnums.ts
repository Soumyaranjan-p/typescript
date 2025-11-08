enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.




enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE