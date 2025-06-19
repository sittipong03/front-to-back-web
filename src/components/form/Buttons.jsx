import { Loader } from "lucide-react"

function Buttons({ isSubmitting, label }) {
    return (
        <button 
        className='bg-gray-600 hover:bg-gray-800 hover:cursor-pointer hover:duration-300 hover:scale-105 text-white p-2 rounded-md flex gap-1'
        disabled={isSubmitting} // mute ปุ้มตอนเป็น F 
        
        >
            {
            isSubmitting
                ? <><Loader className='animate-spin' />Loading</>
                : label
            }
        </button>
    )
}

export default Buttons