import FormInput from '../../components/form/FormInput'
import { createAlert } from '../../utils/createAlert'
import { useForm } from "react-hook-form"
import axios from 'axios'

function Register() {

  const { handleSubmit , register} = useForm() //ถ้าจุดที่ด้านหลัง useForm จะเห็น fn ข้างใน บรรทัดนี้คือ destruct ของ function ข้างใน


  const hdlSubmit = async (value) => {
    try {
      const res = await axios.post("http://localhost:8000/auth/register" , value) // register endpoint 
      createAlert("success" , "Register success")
    } catch (error) {
      console.log(error)
      createAlert("info", error.response?.data?.message) // โชว์สิ่งที่ส่ง error ทั้งหมด มาจาก backend
    }
    
  }

  return (

    <div className='flex w-full h-full justify-end'>
      {/* card */}
      <div className="border w-64 h-[300px] p-4 m-4 rounded-md">
        <h1 className='font-bold text-center'>register</h1>

        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className='flex flex-col gap-4'>
            <FormInput register ={register} name="email" />
            <FormInput register ={register} name="name" />
            <FormInput register ={register} name="password" />
            <FormInput register ={register} name="confrimPassword" />
          </div>
          <div className=' flex justify-center mt-4'>
            <button className='bg-gray-600 text-white p-2 rounded-md'>Register</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Register