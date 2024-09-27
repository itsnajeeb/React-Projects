import { useForm } from "react-hook-form";

import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  function onSubmit(data) {
    console.log("Form Submitted Successfully ", data);

  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='border-blue-700 border-2  w-2/4 p-8 rounded-lg'>
        <h1 className='text-white text-4xl text-center mb-5 border-b-2 w-60 m-auto '>React Form</h1>
        <form action="" className='w-full gap-2 flex flex-col' onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="" className='text-white '>Fist Name : </label>
          <input type="text" name="" id="" className='w-full mb-2 h-9 rounded-md px-2 border-none font-mono font-bold text-xl' {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i
          })} />
          {errors.firstName?.type === 'required' && <p>First Name is required</p>}
          {errors.firstName?.type === "maxLength" && <p>First Name cannot exceed 20 character</p>}
          {errors.firstName?.type === "pattern" && <p>Alphabetical character only </p>}


          <label htmlFor="" className='text-white '>Last  Name : </label>
          <input type="text" className='w-full mb-2 h-9 rounded-md px-2 border-none font-mono font-bold text-xl' {...register("lastName",{
            required : true,
            maxLength:20,
            pattern: /^[A-Za-z]+$/i
          })} />
          {errors?.lastName?.type === "required" && <p>Last Name is Required </p> }
          {errors?.lastName?.type === "maxLength" && <p>Last Name channot exceed 5 character</p> }
          {errors?.lastName?.type === "pattern" && <p>Alphabetical character only </p> }


          <label htmlFor="" className='text-white '>Age : </label>
          <input type="number" className='w-full mb-2 h-9 rounded-md px-2 border-none font-mono font-bold text-xl' {...register("age",{
            required:true,
            min:18,
            max:30,
            })} />
            {errors.age && <p>You Must be older then 18 and younger then 99 years old</p>}

          <input type='submit' className=' mt-10 bg-pink-500 text-white py-3 tracking-[.4rem]  w-full rounded-md px-2 border-none cursor-pointer font-bold text-xl' />
        </form>
      </div>
    </div>
  )
}

export default App
