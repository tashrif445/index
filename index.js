function checkVotingEligibility() {
    let age = prompt("Enter your age:");

    age = parseInt(age);

    if (isNaN(age)) {
        console.log("Please enter a valid number for age.");
    } else if (age >= 18) {
        console.log("You are eligible to cast a vote.");
    } else {
        console.log("You are not eligible to cast a vote.");
    }
}

