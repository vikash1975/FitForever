// import React, { useState } from 'react'
// import InputField from '../components/common/InputField';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { Validation } from '../validations/Validations';
// import { submitContactForm } from '../redux/contactSlice';
// function Contact() {
//     const dispatch=useDispatch();
//     const {loading}=useSelector((state)=>state.contact);
//     const [formData,setFormData]=useState({
//         name:"",
//         email:"",
//         number:"",
//         program:"",
//         message:"",
//     });

//     const [errors,setErrors]=useState({});
    
//     const handleChange=(e)=>{
//         const {name,value}=e.target;
//         setFormData((prev)=>({
//             ...prev,
//             [name]:value,
//         }));

//      if(errors[name]){
//      setErrors((prev)=>({
//         ...prev,
//         [name]:"",
//      }));
//      }

//     }


//     const handleSubmit=async(e)=>{
//         e.preventDefault();

//         const validationsError=Validation(formData);
//         if(Object.keys(validationsError).length>0){
//             setErrors(validationsError);
//             return;
//         }

//         const result=await dispatch(submitContactForm(formData));


//         if(submitContactForm.fulfilled.match(result)){
//             toast.success(result.payload.message);


//             setFormData({
//                 name:"",
//                 email:"",
//                 number:"",
//                 program:"",
//                 message:""
//             });

//             setErrors({});
//         }

//         if(submitContactForm.rejected.match(result)){
//             toast.error(result.payload);
//         }
//     }   
//   return (
    
//     <section className='min-h-screen bg-black px-4 py-10 md:px-8 lg:px-12'>
//         <div className='mx-auto grid min-h-[700px] max-w-7xl overflow-hidden rounded-3xl border border-white/100 bg-zinc-950 lg:grid-cols-2 '>
//             <div className='relative min-h-[400px] lg:min-h-full'>
//             <img src='/contact.png' alt='fitforever gym' className='absolute inset-0 h-full w-full object-cover'/>
//              <div className="absolute inset-0 bg-black/20" />
//             </div>


//             <div className='w-full flex items-center p-6 md:p-10 lg:p-14'>
//                 <div>
//                     <p>CONTACT US</p>
//                     <h1>LET'S SCHEDULE YOUR(" ")
//                         <span>FIRST SESSION</span>
//                     </h1>

//                     <p>
//                         Ready to start your fitness journey? Fill out the form and our team will get back to you.
//                     </p>
//                 </div>

//                 <form onSubmit={handleSubmit}>
//                     <InputField 
//                     label="Full Name"
//                     type='text'
//                     name="name"
//                     placeholder="Enter Your Full Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                      error={errors.name}
//                     />

//                     <InputField 
//                     label="Email"
//                     type='email'
//                     name="email"
//                     placeholder="Enter Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     error={errors.email}
//                     />

//                     <InputField 
//                     label="Contact Number"
//                     type='number'
//                     name="number"
//                     placeholder="Enter your contact number"
//                     value={formData.number}
//                     onChange={handleChange}
//                     error={errors.number}
//                     />

//                     <select name='program' value={formData.program} onChange={handleChange}>
//                      <option value="">Choose a program</option>
//                      <option value="Strength Training">Strength Training</option>
//                      <option value="Weigth Loss">Weight Loss</option>
//                      <option value="Muscle Building">Muscle Building</option>
//                      <option value="Personal Training">Personal Training</option>
//                      <option value="Cardio & Endurance">Cardio & Endurance</option>
//                      <option value="Functional Training">Functional Training</option>
//                     </select>
                     
//                      <textarea 
//                      name='message'
//                      value={formData.message}
//                      onChange={handleChange}
//                      rows={4}
//                      placeholder='Tell us how we can help...'
//                      />

//                      <button type='submit' disabled={loading}>
//                         {loading ? "SENDING..." : "SEND ENQUIRY"}
//                      </button>
//                 </form>
//             </div>

//             <div>

//             </div>
//         </div>
//     </section>
//   )
// }

// export default Contact









import React, { useState } from "react";
import InputField from "../components/common/InputField";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { submitContactForm } from "../redux/contactSlice";
import { ContactValidation } from "../validations/Validations";

function Contact() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    program: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = ContactValidation(formData);

    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
      return;
    }

    const result = await dispatch(
      submitContactForm(formData)
    );

    if (submitContactForm.fulfilled.match(result)) {
      toast.success(result.payload.message);

      setFormData({
        name: "",
        email: "",
        number: "",
        program: "",
        message: "",
      });

      setErrors({});
    }

    if (submitContactForm.rejected.match(result)) {
      toast.error(result.payload);
    }
  };

  return (
    <section className="min-h-screen bg-black px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[700px] max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative min-h-[400px] lg:min-h-full">
          <img
            src="/contactpage.jpeg"
            alt="FitForever Gym"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center p-6 md:p-10 lg:p-14">
          <div className="w-full">

            {/* HEADING */}
            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-lime-400">
                CONTACT US
              </p>

              <h1 className="text-3xl font-black leading-tight text-white md:text-4xl">
                LET'S SCHEDULE YOUR{" "}
                <span className="text-lime-400">
                  FIRST SESSION
                </span>
              </h1>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Ready to start your fitness journey? Fill out the
                form and our team will get back to you.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <InputField
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />

              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <InputField
                label="Contact Number"
                type="tel"
                name="number"
                placeholder="Enter your contact number"
                value={formData.number}
                onChange={handleChange}
                error={errors.number}
                maxLength={10}
              />

              {/* PROGRAM */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Select Program
                </label>

                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className={`w-full rounded-xl border bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 ${
                    errors.program
                      ? "border-red-500"
                      : "border-white/10"
                  }`}
                >
                  <option value="">
                    Choose a program
                  </option>

                  <option value="Strength Training">
                    Strength Training
                  </option>

                  <option value="Weight Loss">
                    Weight Loss
                  </option>

                  <option value="Muscle Building">
                    Muscle Building
                  </option>

                  <option value="Personal Training">
                    Personal Training
                  </option>

                  <option value="Cardio & Endurance">
                    Cardio & Endurance
                  </option>

                  <option value="Functional Training">
                    Functional Training
                  </option>
                </select>

                {errors.program && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.program}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message{" "}
                  <span className="text-gray-500">
                    (Optional)
                  </span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-bold tracking-wide text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "SENDING..." : "SEND ENQUIRY"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

