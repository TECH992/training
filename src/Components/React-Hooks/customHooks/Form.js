import { useState } from "react"



const Form = () => {
          const[name, setName] = useState()
          const [email, SetEmail] = useState()
          const[form,setForm]=useState([])
        
         localStorage.setItem("form",form)
          const handleName = (event) => {
                setName(event.target.value)    
          }
          const handleEmail = (event) => {
                    SetEmail(event.target.value)
                    
          }
          const handleSubmit = (event) => {
                    setForm((prev) => {
                            return[...prev,name,email]
                  })
          }
          
          return (
                    <div>
                              <h1 className="text-[#fff] text-[24px] font-bold bg-[#171ae2] py-2">Custom-Hooks</h1>
                              <form className=" mt-4" onSubmit={handleSubmit}>
                                        <label className="mr-4 text-[24px]text-[#000] font-bold">
                                                  Name:
                                                  <input type="text" name="name" className='border-[4px] border-[#758283] py-4 px-4 outline-none rounded-[50px] mb-4  ml-4' placeholder="write name..............." onChange={handleName } />
                                        </label><br />
                                        <label className="mr-4 text-[24px]text-[#000] font-bold">
                                                  Email:
                                                  <input type="email" name="name" className='border-[4px] border-[#758283] py-4 px-4 outline-none rounded-[50px] mb-4 ml-4' placeholder="write Email..........." onChange={handleEmail} />
                                        </label><br />
                                        <button className="text-[#fff] text-[24px] border-[4px] border-[#03C6C7] font-bold rounded-[200px] bg-[#E21717] ml-4 px-4 py-4">Submit</button>
                              </form>
                    </div>
          )

}

export default Form