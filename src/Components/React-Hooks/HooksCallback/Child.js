import React, { memo } from 'react'

const Child = (props) => {
          console.log(props)
          let arrData = props.data
          console.log("hii")

const deleteData=(data)=>{
 props.valueDelete(data)
}
          return (
                    <div className=' pb-4'>
                              <input className='border-[4px] border-[#758283] py-4 px-4 outline-none rounded-[50px]' placeholder="write-todo.." onChange={props.inputData} />
                              <div className='pl-4 mt-4'>
                                        <button className='border-[4px] rounded-[50%] border-[#120E43] p-4 text-[24px] text-[#FFFFFF] font-bold bg-[#02B290] hover:bg-[#EDC126]' onClick={props.addData}>Add</button>
                              </div>
                              <div className="flex flex-row justify-center">
                                        <ul className='border-[#50DBB4] border-[4px] w-[500px]  mt-2 rounded-md'>
                                                  <h2 className='text-[28px] text-[#DDD101] font-bold px-4'>To-Do List</h2>
                                                  {
                                                            arrData && arrData.map((item, index) => {
                                                                      return (
                                                                                <div className="flex flex-row justify-center py-4">
                                                                                          <h3 className='text-[28px] text-[#DDD101] font-bold px-4'>{index} .</h3>
                                                                                          <li className='text-[28px] text-[#0D0D0D] font-bold'>{item}</li>
                                                                                          <div className="px-4">
                                                                                                    <button className='border-[4px] rounded-md border-[#35BDD0] p-2 text-[14px] text-[#03C6C7] font-bold bg-[#E21717] hover:bg-[#EDC126]' onClick={(e)=>deleteData(index)}>-</button>
                                                                                          </div>
                                                                                </div>

                                                                      )

                                                            })

                                                  }
                                        </ul>
                              </div>
                    </div>
          )
}

export default memo(Child)