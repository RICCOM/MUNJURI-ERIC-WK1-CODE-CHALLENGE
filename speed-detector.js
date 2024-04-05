function speedLimiter(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        if (demeritPoints > maxDemeritPoints) {
            return "License suspended";
        } else {
            return "Points: " + demeritPoints;
        }
    }
}

// Get speed input from the user
const speedInput = prompt("Enter the speed of the car (in km/h):");
const speed = parseFloat(speedInput);


if (!isNaN(speed)) {
    // Show demerit points
    const result = speedLimiter(speed);
    alert(result);
} else {
    alert("Invalid input. Please enter a valid number.");
}