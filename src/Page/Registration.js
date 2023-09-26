import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  fetchData  from '../Service/fetchData'
const Registration = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });


  let navigate = useNavigate()

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    console.log(e.target.name)
    setFormData({
      ...formData,
      [name]: value

    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData !== null && typeof formData === 'object') {
      console.log(formData);
      navigate("/profile", { state: { formData: formData } });
    }



  };

  React.useEffect(() => {
    fetchData("https://dummyjson.com/products?limit=100")
      .then(data => {
        // Handle the API data here
        console.log('API data:', data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  })



  return (
    <div>
      <div className='flex flex-col justify-center my-16 mx-[600px]'>
        <h2 className='text-[#03C6C7] text-[24px] font-bold mx-16'>Welcome to your registration  Page</h2>
        <input
          type='text'
          name='name'
          className='my-4 border-[2px] border-[#000] rounded-[100px] bg-[#FFF] w-[338px] md:w-[638px] h-[50px] md:h-[80px] shrink-0 outline-[#1BC2B8] text-[#000] placeholder:text-[#758283] placeholder:md:text-[28px] placeholder:not-italic placeholder:text-center placeholder:leading-normal placeholder:font-[400] placeholder:text-[24px]'
          placeholder='Enter your full name'
          value={formData.name ? formData.name : ""}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='email'
          className='my-4 border-[2px] border-[#000] rounded-[100px] bg-[#FFF] w-[338px] md:w-[638px] h-[50px] md:h-[80px] shrink-0 outline-[#1BC2B8] text-[#000] placeholder:text-[#758283] placeholder:md:text-[28px] placeholder:not-italic placeholder:text-center placeholder:leading-normal placeholder:font-[400] placeholder:text-[24px]'
          placeholder='Enter your email'
          value={formData.email ? formData.email : ""}
          onChange={handleInputChange}
        />
        <input
          type='password'
          name='password'
          className='my-4 border-[2px] border-[#000] rounded-[100px] bg-[#FFF] w-[338px] md:w-[638px] h-[50px] md:h-[80px] shrink-0 outline-[#1BC2B8] text-[#000] placeholder:text-[#758283] placeholder:md:text-[28px] placeholder:not-italic placeholder:text-center placeholder:leading-normal placeholder:font-[400] placeholder:text-[24px]'
          placeholder='Enter password'
          value={formData.password ? formData.password : ""}
          onChange={handleInputChange}
        />
        <button
          className='w-[345px] md:w-[645px] h-[52px] shrink-0 rounded-[15px] bg-[#1BC2B8] text-[#2F2E41] text-center text-[16px] md:text-[24px] not-italic font-[800] tracking-[0.96px] leading-normal mt-10'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Registration;
