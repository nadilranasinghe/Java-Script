function validatePage(){
  let isValid = true;

   const fullName = document.getElementById("fullName").value.trim();
   if(fullName == ""|| (!/^[A-Za-z\s]+$/.test(fullName))){
    document.getElementById("nameError").textContent = "Name is required"
    isValid = false

   }
   const postalCode = document.getElementById("postalCode").value.trim();
   if(postalCode == "" || !/[a-zA-Z0-9]/.test(postalCode)){
    document.getElementById("postalCodeErr").textContent = "Postal code cannot be blank."
    isValid = false
   }
   const residence = document.getElementById("residence").value;
   if(residence == 0){
    document.getElementById("residenceErr").textContent = "Residence cannot be blank"
    isValid = false

   }
   const dwelling = document.querySelector('input[name="dwelling"]:checked')
   if(dwelling == 0){
    document.getElementById("dwellingErr").textContent = "Cannot be blank."
    isValid = false

   }


   console.log(`The name is $(fullName) and the Postal Code is $(postalCode) and the part residence is $(residence) and the Dwelling is $(dwelling)`)
    if (isValid){
    document.body.innerHTML = `
    <p><strong>Name:</strong>${fullName}</p>
    <p><strong>PostalCode:</strong>${postalCode}</p>
    <p><strong>Residence:</strong>${residence}</p>
    <p><strong>Dwelling:</strong>${dwelling.value}</p>
    `;
    
    }

    return isValid;
}
