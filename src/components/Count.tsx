import { useState } from "react"



const Count:React.FC = () => {
    const [count, setCount] =useState<number>(0)

    const Increment = (e:React.MouseEvent<HTMLButtonElement>) => {
        setCount(count+1)
        console.log(e);
        
    }

    const Decrement = (e:React.MouseEvent<HTMLButtonElement>) => {
        setCount(count-1)
        console.log(e);
    }

    const Reset = (e:React.MouseEvent<HTMLButtonElement>)=> {
        setCount(0)
        console.log(e)
    }
  return (
    <div className="">
      <h1 className="pb-2 font-2xl text-red-500 rounded-md flex justify-center items-center">Count = {count}</h1>
      <div className="flex justify-center items-center gap-4">
      <button className="border p-1 rounded-md bg-green-200" onClick={Increment}>Increment</button>
      <button className="border p-1 rounded-md bg-red-200" onClick={Decrement}>Decrement</button>
      <button className="border p-1 rounded-md bg-green-200" onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default Count
