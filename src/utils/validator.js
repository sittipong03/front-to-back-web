import { object, ref, string } from "yup"

export const registerSchema = object({
    email: string().email("Incorrect Email").required("Please enter Email"),
    name: string().min(3, "Name ต้องมากกว่า 3 ตัวอักษร"),
    password: string().min(6, "Password ต้องมากกว่า 6 ตัวอักษร"),
    confrimPassword: string().oneOf([ref("password"), null], "Password ไม่ตรงกัน")
})

export const loginSchema = object({
    email: string().email("Incorrect Email").required("Please enter Email"),
    password: string().min(6, "Password ต้องมากกว่า 6 ตัวอักษร"),
})
