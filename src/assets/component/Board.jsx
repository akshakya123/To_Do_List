

const Board = ({value,index,showText,setShowText}) => {

    const handleDetete=() => {
        let removeIndex=showText.indexOf(value);
        setShowText((prevShowText) => {
            const updatedShowText = [...prevShowText];
            updatedShowText.splice(removeIndex, 1);
            return updatedShowText;
          });
    }

  return (
    <>
      <div className="flex flex-col text-center align-middle justify-center border border-cyan-700 px-5 py-2 rounded-lg m-5 hover:bg-slate-300">
       <p>{value}</p>
       <button className="text-white rounded-2xl boder bg-red-600 px-5 m-5 mt-4 hover:bg-red-900"
       onClick={handleDetete}
       >Delete</button>
      </div>
    </>
  )
}

export default Board
