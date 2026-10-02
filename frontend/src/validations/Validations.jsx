

// const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phone=/^[6-9]\d{9}$/;
// const password= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// export const Validation=(data)=>{
//     const errors={};
 
//     if(!email.test(formData.email)){
//         errors.email="Enter a valid email";
//     }


//     if(!phone.test(data.phone)){
//         errors.phone="Enter a valid 10-digit phone number";
//     }



//     if(!password.test(data.password)){
//         errors.password="Password must be 8+ characters with letter, number and special character";
//     }


//     return errors;

// }





const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phone = /^[6-9]\d{9}$/;

const password =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const Validation = (data) => {
  const errors = {};

  if (!email.test(data.email)) {
    errors.email = "Enter a valid email";
  }

  if (!phone.test(data.number)) {
    errors.number = "Enter a valid 10-digit phone number";
  }

  if (!password.test(data.password)) {
    errors.password =
      "Password must be 8+ characters with letter, number and special character";
  }

  return errors;
};







export const ContactValidation = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!email.test(data.email)) {
    errors.email = "Enter a valid email";
  }

  if (!phone.test(data.number)) {
    errors.number = "Enter a valid 10-digit phone number";
  }

  if (!data.program) {
    errors.program = "Please select a program";
  }

  return errors;
};