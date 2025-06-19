import FormInput from '../../components/form/FormInput'
import { createAlert } from '../../utils/createAlert'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Buttons from '../../components/form/Buttons'
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema, registerSchema } from '../../utils/validator'
import { actionLogin, actionRegister } from '../../api/auth'

function Login() {

  const { handleSubmit, register, formState , reset} = useForm({ //ถ้าจุดที่ด้านหลัง useForm จะเห็น fn ข้างใน บรรทัดนี้คือ destruct ของ function ข้างใน
    resolver: yupResolver(loginSchema) // validate ข้อมูลจาก backend , resolver : <- ตรงนี้ใช้ของเจ้าไหนก้ได้อันนรี้ yupResolver ข้างใน schema ที่จาก back
  }) 
  const { isSubmitting ,errors } = formState // destruct formstate ข้างบน formstate 
  // console.log('errors', errors)

  const hdlSubmit = async (value) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000))

    try {
      // console.log(value)
      const res = await actionLogin(value) // register endpoint 
      console.log(res)
      createAlert("success", "Login success")
      reset()
    } catch (error) {
      // console.log(error)
      createAlert("info", error.response?.data?.message) // โชว์สิ่งที่ส่ง error ทั้งหมดมาจาก backend ใส่ ? เผื่อไม่เจอ จะ return undefind
    }

  }

  return (

    <div className='flex w-full h-full justify-end'>
      {/* card */}
      <div className="border w-64 p-4 m-4 rounded-md">
        <h1 className='font-bold text-center'>Login</h1>

        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className='flex flex-col gap-4'>
            <FormInput register={register} name="email" errors={errors}/>
            <FormInput register={register} name="password" errors={errors} type="password"/>
          </div>
          <div className=' flex justify-center mt-4'>
            <Buttons isSubmitting={isSubmitting} label={"Login"} />
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login