import { useState, useCallback, useEffect, useRef} from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberAllow , setnumberAllow] = useState(false)
  const [charaAllow, setcharaAllow] = useState(false) 
  const [Password , setpassword] =useState("") 

  // use referane hook
  const passwordRef = useRef(null)
   const passwordGenerator = useCallback(() =>{
      let pass = ""
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllow) str += "0123456789"
      if (charaAllow) str += "!@#$%^&*()_+"  
      for (let i=1 ;  i<= length; i++){
          let char = Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(char)
        }
        setpassword(pass)
      } ,[length, numberAllow, charaAllow, setpassword]) 
      
      const copyPasswordToClip = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(Password)
      },[Password])
      
      useEffect(() => {
      passwordGenerator()

      },[length, numberAllow , charaAllow , passwordGenerator])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 text-orange-500 bg-gray-700 ">
    <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow-rounded-lg overflow-hidden mb-4">
      <input 
      type="text"
      value={Password}
      className='outline-none w-full py-1 px-3' 
      placeholder='password' 
      readOnly
      ref={passwordRef}
      />
      <button 
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      onClick={copyPasswordToClip}
      >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2 '>
      <div className='flex items-center gap-x-1 my-5'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer' 
        onChange={(e) => {setlength(e.target.value)}}/>
        <label>Lenght :{length}</label>
      </div>

      <div className='flex items-center gap-x-1 my-5'>
        <input type="checkbox"
        defaultChecked={numberAllow}
        id="numberInput"
        
        onChange={() => {setnumberAllow((prev) => !prev) }}/>
        <label htmlFor='numberInput'>Number</label>
      </div>

      <div className='flex items-center gap-x-1 my-5'>
        <input type="checkbox"
        defaultChecked={charaAllow}
        id="charaInput"
        
        onChange={() => {setcharaAllow((prev) => !prev) }}/>
        <label htmlFor='charaInput'>Charater</label>
      </div>

    </div>
  </div>
    
   
  )
}

export default App
