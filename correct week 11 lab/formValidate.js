function validatePage(){
    let isValid = true;


    const name = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const partNumber = document.getElementById("partNumber").value;
    const warantSelected = document.querySelector('input[name="warranty"]:checked');

    console.log(`The name is ${name} and the dob is ${dob} and partHNumber is  ${partNumber} and waranty is ${warantSelected}`)



    return isValid;
}