function checkGrade() {
    let marks = document.getElementById("marks").value;

    if (marks >= 90) {
        document.getElementById("result").innerHTML = "Grade: A";
         document.getElementById("result").style.color = "green";
    }
    else if (marks >= 70) {
        document.getElementById("result").innerHTML = "Grade: B";
         document.getElementById("result").style.color = "green";
    }
    else  if (marks >= 50) {
        document.getElementById("result").innerHTML = "Grade: C";
            document.getElementById("result").style.color = "green";
    }
    else {
        document.getElementById("result").innerHTML = "Grade: Fail";
           document.getElementById("result").style.color = "red";

    }
    if (marks > 100 || marks < 0) {

    result.innerHTML = "Invalid Marks";
    result.style.color = "orange";

}

else if (marks === "") {

    result.innerHTML = "Please Enter Marks";
    result.style.color = "black";

}
}