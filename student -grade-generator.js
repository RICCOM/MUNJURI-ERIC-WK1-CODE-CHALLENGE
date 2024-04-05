//prompt user to enter marks
let marks = prompt("Enter the student's marks (between 0 and 100):");
// Check if the input is a number and within the range
if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the grade output message
    alert("Grade: " + grade);
} else {
    // Output invalid if input enterd is not a number between the range
    alert("Invalid ");
}
