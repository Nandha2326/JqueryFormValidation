// function Validate(event) {
//     event.preventDefault();
//     checkInputs();
// }

function Validate() {
    const form = document.querySelector('form');
    form.addEventListener('submit', p => {
        p.preventDefault();
        checkInputs();
    })
}

function checkInputs() {
    // getting ids in variables
    const fnamevalue         = document.querySelector("#fname").value.trim();
    const lnamevalue         = document.querySelector("#lname").value.trim();
    const emailvalue         = document.querySelector("#email").value.trim();
    const MobileNovalue      = document.querySelector("#MobileNo").value.trim();
    const Agevalue           = document.querySelector("#Age").value.trim();
  
    const AddressValue       = document.querySelector("#Addre").value.trim();
    const QualificationValue = document.querySelector("#Qualification").value.trim();
    const ProfilePicvalue    = document.querySelector('#ProfilePic').value.trim();

    //for Checkbox
    const GenderValue = document.querySelector('[name="gender"]:checked');
    const SkillsValue = document.querySelector('[name="Skills"]:checked');
    const AgreeValue  = document.querySelector('[name="Agree"]:checked');

    //to Validate firstnameValue
    if (fnamevalue == "") {
        document.querySelector(' #firstname').innerHTML = "Please Enter firstname";
        document.querySelector("#fname").style.border = "2px solid red";
    }
    else {
        document.querySelector("#firstname").innerHTML = "";
        document.querySelector("#fname").style.border = "2px solid green";
    }
    
    //to Validate LastnameValue
    if (lnamevalue == "") {
        document.querySelector('#lastname').innerHTML = "Please Enter lastname";
        document.querySelector("#lname").style.border = "2px solid red";
    }
    else {
        document.querySelector("#lastname").innerHTML = "";
        document.querySelector("#lname").style.border = "2px solid green";
    }

    //to Validate EmailValue
    const check1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailvalue== "") {
        document.querySelector("#mail").innerHTML = "Please Enter Your email !!";
        document.querySelector("#email").style.border = "2px solid red";
    }
    else if (!check1.test(emailvalue)) {
        document.querySelector("#mail").innerHTML = "Please Enter Your valid email !!";
        document.querySelector("#email").style.border = "2px solid red";
    }
    else {
        document.querySelector("#mail").innerHTML = "";
        document.querySelector("#email").style.border = "2px solid green";
    }

    //to Validate MobileNo
    const check2 = /^[0-9]{10}$/;
    if (MobileNovalue == "") {
        document.querySelector('#No').innerHTML = "Please Enter Phone No";
        document.querySelector("#MobileNo").style.border = "2px solid red";
    }
    else if (!check2.test(MobileNovalue)) {
        document.querySelector('#No').innerHTML = "Please Enter Valid Phone No";
        document.querySelector("#MobileNo").style.border = "2px solid red";
    }
    else {
        document.querySelector("#No").innerHTML = "";
        document.querySelector("#MobileNo").style.border = "2px solid green";
    }

    //to Validate AgeValue
    if (Agevalue == "") {
        document.querySelector('#Agee').innerHTML = "Please Enter Your Age";
        document.querySelector("#Age").style.border = "2px solid red";
    }
    else {
        document.querySelector("#Agee").innerHTML = "";
        document.querySelector("#Age").style.border = "2px solid green";
    }

    //to  Validate Address
    if (AddressValue == "") {
        document.querySelector('#Address').innerHTML = "Please Enter Your Adress";
        document.querySelector("#Addre").style.border = "2px solid red";
    }
    else {
        document.querySelector("#Address").innerHTML = "";
        document.querySelector("#Addre").style.border = "2px solid green";
    }

    //to  Validate QualificationValue
    if (QualificationValue == "") {
        document.querySelector("#alert-Qual").innerHTML = "Please Enter Qualification";
    }
    else {
        document.querySelector('#alert-Qual').innerHTML = "";

    }

    //to  Validate Gender
    if (!GenderValue) {
        document.querySelector('#alert-gender').innerHTML = "Please Enter Your Gender";
    }
    else {
        document.querySelector("#alert-gender").innerHTML = "";
    }

    //to  Validate Gender
    if (!SkillsValue) {
        document.querySelector('#alert-Skills').innerHTML = "Please Enter Your Skills";
    }
    else {
        document.querySelector("#alert-Skills").innerHTML = "";
    }

    //to  Validate AgreeValue
    if (!AgreeValue) {
        document.querySelector('#Agreebox').style.outline = " 1px solid red";
        document.querySelector('#agww').style.color = "red";
    }
    else {
        document.querySelector('#Agreebox').style.outline = "1px solid green";
        document.querySelector("#agww").style.color = "green";
    }

    //to  Validate Profile
    if (ProfilePicvalue == "") {
        document.querySelector('#Profile').innerHTML = "Please Upload your photo";
    }
    else {
        document.querySelector("#Profile").innerHTML = "";
    }

}

const Prof = document.getElementById('Prof');// getting Prof id for to storing img
const deleteBtn = document.getElementsByClassName('bt')[0]; // Getting the delete button

function changeImage(input) {
    if (input.files && input.files[0]) {
        Profile.innerHTML = "";    // Clear the previous content
        const file = input.files[0];
        const fileType = file.type;
        const validImageTypes = ['image/jpeg', 'image/png']; // Valid image file types
        // Perform Image file validation
        if (validImageTypes.includes(fileType)) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                Prof.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">
              <a class="bt" onclick="deleteImage()"><i class="fa-solid fa-trash rr"></i></a>`;
            };
  
        } 
        // Perform text file validation
        else if (fileType === 'text/plain') {
            const reader = new FileReader();
             reader.readAsText(file);
             reader.onload = function (e) {
                Prof.innerHTML = `<img src="https://assets.dryicons.com/uploads/icon/svg/6176/eb9a89e8-ef53-4cff-beeb-c04dc3f0ebcb.svg" alt="Uploaded Image">
                <a class="bt" onclick="deleteImage()"><i class="fa-solid fa-trash rr"></i></a>`
            };
        } 
        else {
            alert("Invalid file type. Please upload an image or a text file.");
            ProfilePic.value = "";
            Profile.innerHTML = "Please Upload your photo"; 
        }
    }
}

function deleteImage() {
    Prof.innerHTML = "";
    ProfilePic.value = "";
}

// // For Adding ProfilePic 
// const Prof = document.getElementById('Prof');
// const dt = document.getElementsByClassName('bt');// getting css for delete button
// function changeImage(input) {
//     if (input.files[0]) {
//        const reader = new FileReader();//calling a function fileReader
//         Profile.innerHTML = "";//Its clear the error in onchange
//         reader.readAsDataURL(input.files[0]);//recieving the upload image
//         reader.onload = function (e) {
//             Prof.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">
//         <a class="bt" onclick="deleteImage()"><i class="fa-solid fa-trash rr"></i></a>`;
//         }
        
//     }
    
// }
// // For Delting ProfilePic 
// function deleteImage() {
//     Prof.innerHTML = "";
//     ProfilePic.value = "";
// }
