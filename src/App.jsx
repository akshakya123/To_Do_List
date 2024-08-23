import {useState} from 'react'
import Input from './assets/component/Input'
import Board from './assets/component/Board';


const App = () => {
  const [showText, setShowText] = useState([]);
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 m-4">
        <h1 className='text-lg text-black px-6 m-5'>To_Do_list</h1>
        <Input showText={showText} setShowText={setShowText}/>
       <div>
        <h1 className='flex justify-center text-pretty text-lime-400 text-lg'>Content</h1>
       <div className='grid grid-cols-3 gap-4 px-4 sm:px-8 md:px-10 lg:px-12'>
          {showText.map((val,ind)=>{
            return (<Board value={val} key={ind} index={ind} showText={showText} setShowText={setShowText}/>);
          })}
        </div>
       </div>
       
      </div>
    </>
  )
}

export default App

