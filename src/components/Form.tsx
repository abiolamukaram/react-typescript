import { useState } from "react"

const Form:React.FC = () => {
    const [name,setName] =useState<string>("")

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(name)

    }

  return (
   <div className="flex-row w-full ">
     <form className="font-2xl gap-4 text-black rounded-md flex justify-center items-center" onSubmit={handleSubmit} action="">
        <input onChange={handleChange} value={name} className="bg-slate-200 pl-4 rounded-md border" type="text" placeholder="enter your name"  />
        <button className="border px-2 rounded-md bg-green-200">submit</button>
    </form>
   </div>
  )
}

export default Form
