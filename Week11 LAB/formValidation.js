function validatePage(){
    let inValid = true;

   const nameField = document.getElementById("fullName").value.trim();
   if(nameField == ""|| (!/^[A-Za-z\s]+$/.test(nameField))){
    document.getElementById("nameError").textContent = "Name is required and contain"

   }
   const dob = document.getElementById("dob").value.trim();
   if(dob == "" || !/^\d{4}-\d{2}-\d{2}/.test(dob)){
    document.getElementById("dobError").textContent = "DOB cannot be blank or must be YYYY-DD-MM format."
    inValid = false
   }
   const partNumber = document.getElementById("partNumber").value;
   if(partNumber == 0){
    document.getElementById("partError").textContent = "Part Number cannot be blank."
    inValid = false

   }
   const warrantySelected = document.querySelector('input[name-"warranty"]:checked')
   if(warrantySelected == 0){
    document.getElementById("warrantyError").textContent = "Cannot be blank."

   }


   console.log(`The name is $(name) and the dob is $(dob) and the part Number is $(partNumber) and the warranty is $(warrantySelected)`)

   if (isValid){
    const summaryHTML = `
    <p><strong>Name:</strong>${nameField}</p>
    <p><strong>DOB:</strong>${dob}</p>
    <p><strong>PartNumber:</strong>${partNumber}</p>
    <p><strong>Extended Warranty:</strong>${warrantySelected.value}</p>
    `;

    
    

    
   }






    return inValid;
}