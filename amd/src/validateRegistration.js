export const validate = () => {

    const form = document.querySelector('.mform.full-width-labels, .mform');
    const phoneInput = document.getElementById('id_profile_field_phonenumber');
    const dayInput = document.getElementById('id_profile_field_dataofbirth_day');
    const monthInput = document.getElementById('id_profile_field_dataofbirth_month');
    const yearInput = document.getElementById('id_profile_field_dataofbirth_year');
    const occupationInput = document.getElementById('id_profile_field_occupation');
    const genderInput = document.getElementById('id_profile_field_gender');
    const occupationOtherInput = document.getElementById("fitem_id_profile_field_occupation_other");
    const occupationSocialMediaInput = document.getElementById("id_profile_field_occupation_socialmedia_label");
    const genderOtherInput = document.getElementById("fitem_id_profile_field_gender_other");

    form.addEventListener('submit', function(event) {
        const phoneNumber = libphonenumber.parsePhoneNumberFromString(phoneInput.value, 'BR');
        
        if(!phoneNumber || !phoneNumber.isValid()){
            event.preventDefault();
            alert('Digite um número de telefone válido.');
            phoneInput.focus();
            return false;
        }

        if(!EighteenYearsPassed(dayInput.value,monthInput.value,yearInput.value)){
            event.preventDefault();
            alert('É necessário ter 18 anos ou mais para se registrar neste site.');
            return false;
        }
    });

    occupationInput.addEventListener("change", function() {
        const occupationOtherEmpty = occupationOtherInput.querySelector("#id_profile_field_occupation_other");
        const occupationSocialMediaEmpty = occupationOtherInput.querySelector("#id_profile_field_occupation_socialmedia_label");
    
        switch (occupationInput.value) {
            case "Outro":
                occupationOtherInput.style.display = "block"; // Show the hidden field
                occupationOtherInput.focus();
                break;
    
            case "Trabalhador(a) de estabelecimentos de lazer que vendem bebida alcóolica":
            case "Trabalhador(a) de outras áreas do setor de arte e cultura":
            case "Trabalhador(a) atuando em implementação do Protocolo Não é Não":
            case "Trabalhador(a) da sociedade civil":
                occupationSocialMediaInput.style.display = "block"; // Show the hidden field
                occupationSocialMediaInput.focus();
                break;
    
            default:
                
            occupationOtherInput.style.display = "none"; // Hide the field if another option is selected
            occupationOtherEmpty.value = "";
            occupationSocialMediaEmpty.value = "";
                break;
        }
    });
    

    genderInput.addEventListener("change", function() {
        if (genderInput.value === "Outros") {
            genderOtherInput.style.display = "block"; // Show the hidden field
            genderOtherInput.focus();
        } else {
            genderOtherInput.style.display = "none"; // Hide the field if another option is selected
            const genderText = occupationOtherInput.querySelector("#id_profile_field_gender_other");
            genderText.value = "";
        }
    });
};

function EighteenYearsPassed(day, month, year) {
    // Convert strings to integers
    const dayInt = parseInt(day, 10);
    const monthInt = parseInt(month, 10) - 1; // Month is 0-indexed in JavaScript Date
    const yearInt = parseInt(year, 10);
  
    // Create a date object for the input date
    const inputDate = new Date(yearInt, monthInt, dayInt);
    // Get the current date
    const currentDate = new Date();
  
    // Calculate the date exactly 18 years ago
    const date18YearsAgo = new Date();
    date18YearsAgo.setFullYear(currentDate.getFullYear() - 18);
  
    // Check if the input date is on or before the date 18 years ago
    return inputDate <= date18YearsAgo;
  }