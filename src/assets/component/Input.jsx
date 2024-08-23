import {useState} from 'react'

const Input = ({ showText,setShowText }) => {

    const [input,setInput]=useState("");


    const addIteam=(e)=>{
        e.preventDefault();
        if(input=="")
          alert("Please write text");
        else
        setShowText([...showText,input]);
        setInput("");
    }

  return (
    <>
    <div className='flex justify-center'>
    <div className='w-full  max-w-md rounded-lg bg-blue-300'>
        <div className='flex justify-center pt-4'>
            <h1 className='flex justify-end'>Add Content</h1>
        </div>
        <div className='flex justify-center mb-4 mx-2'>
            <input 
            className='my-5 rounded-lg p-4 cursor-pointer'
            type=" text" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Enter the text'
            />
            <button 
            className='my-5 bg-red-500 p-3 hover:bg-red-700 rounded-lg' 
            onClick={addIteam}
            >
                Add</button>
        </div>
     </div>
    </div>
    </>
  )
}

export default Input

