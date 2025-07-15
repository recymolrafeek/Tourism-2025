

function validate(){
    let isValid=true
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const nameError = document.getElementById('nameError');

    //Name validation
    if(name.trim()===""){
        nameError.innerText="Name cannot be empty"
        
        isValid=false
    }
    else if (name.trim().length < 3) {
                nameError.textContent = 'Name must be at least 3 characters.';
                isValid = false;
            } 

    return isValid
}
function handleSubmit(e){
   
    //Validating the inputs
    if(!validate()){
         e.preventDefault()
    }

}
document.getElementById("enquiryForm").addEventListener("submit",handleSubmit)
