import React, { useRef ,useState} from 'react'
import { useForm } from "react-hook-form";
import contact from "../image/laptop-and-email-12472.svg";
import emailjs from "@emailjs/browser";
const Form = () => {
          //* register: This function is used to register form input elements. It collects data from these inputs and connects them to the form state.

          //* handleSubmit: This function is used to handle the form submission. It takes a callback function that will be executed when the form is submitted.

          //* formState.errors: This property contains information about validation errors for the form inputs

          const { register, handleSubmit,reset, formState: { errors }, } = useForm();

          const form = useRef();

          const[show,setShow]=useState(false)

          const sendEmail = (data) => {
          console.log(data)

                    //let formValue=data
                    emailjs.sendForm(
                         "service_90zxdlr",
                              //process.env.React_App_ApiKey,
                               "template_r4wfipn",
                             // process.env.React_App_authDomain,
                                        form.current,
                               "2LL6D93W2vkJQjY7E"
                              //process.env.React_App_projectId,
                              )
                              .then(
                                        (result) => {
                                                  if (result.status === 200) {
                                                            setShow(true)
                                                            reset()
                                                            console.log("result", result)
                                                  }
                                        },
                                        (error) => {
                                                  console.log(error.text);
                                        }
                              );
          };

          return (
                    <div className=" mx-4">
                              <div>
                                        <h4
                                                  className="text-black text-[44px] font-bold flex justify-center mt-2"
                                                  style={{ textShadow: " 4px 4px #30dada" }}
                                        >
                                                  <img src={contact} alt="contact" className="w-[64px] mr-2" />
                                                  Contact me
                                        </h4>
                                        <p className="text-black text-[24px]">
                                                  I’m interested in freelance opportunities – especially ambitious or
                                                  large projects. However, if you have other request or question, don’t
                                                  hesitate to use the form.
                                        </p>
                                        <div className="mt-3">
                                                  <form
                                                            onSubmit={handleSubmit((data) => sendEmail(data))}
                                                            className="  "
                                                            ref={form}
                                                            autocomplete="off"
                                                  >
                                                            <input
                                                                      {...register("fullName", {
                                                                                required: true,
                                                                                maxLength: 30,
                                                                                minLength: 5,
                                                                                pattern: /^[A-Za-z]+$/i
                                                                      })}
                                                                      type="text"
                                                                      id="fullName"
                                                                      name="fullName"
                                                                      placeholder="fullName.."
                                                                      className="placeholder:text-white text-[24px] "
                                                                      autocomplete="off"
                                                            />
                                                            {errors?.fullName?.type === "required" && (
                                                                      <p className="error">This field is required</p>
                                                            )}
                                                            {errors?.fullName?.type === "maxLength" && (
                                                                      <p className="error">
                                                                                fullName cannot exceed 30 characters
                                                                      </p>
                                                            )}
                                                            {errors?.fullName?.type === "minLength" && (
                                                                      <p className="error">
                                                                                fullName must be 5 characters
                                                                      </p>
                                                            )}
                                                            {errors?.fullName?.type === "pattern" && (
                                                                      <p className="error">Alphabetical characters only</p>
                                                            )}
                                                            <input
                                                                      {...register("ContactDetail", {
                                                                                required: true,
                                                                                maxLength: 20,
                                                                                minLength: 10,
                                                                                pattern: /\d+/,


                                                                      })}
                                                                      type="text"
                                                                      id="lastName"
                                                                      name="ContactDetail"
                                                                      placeholder="Contact Detail.."
                                                                      className="placeholder:text-white text-[24px] "
                                                                      autocomplete="off"
                                                            />

                                                            {errors?.ContactDetail?.type === "required" && (
                                                                      <p className="error">    "This input is number only."</p>
                                                            )}
                                                            {errors?.ContactDetail?.type === "minLength" && (
                                                                      <p className="error">
                                                                                Contact Detail must be 10 characters
                                                                      </p>
                                                            )}
                                                            {errors?.ContactDetail?.type === "maxLength" && (
                                                                      <p className="error">
                                                                                Contact Detail cannot exceed 20 characters
                                                                      </p>
                                                            )}
                                                            {errors?.ContactDetail?.type === "pattern" && (
                                                                      <p className="error">Only digit number are allowed</p>
                                                            )}
                                                            <input
                                                                      {...register("subject", {
                                                                                required: true,
                                                                                maxLength: 30,
                                                                                minLength: 5,
                                                                                pattern: /^[A-Za-z]+$/i
                                                                      })}
                                                                      type="text"
                                                                      id="subject"
                                                                      name="subject"
                                                                      placeholder="subject.."
                                                                      className="placeholder:text-white text-[24px]"
                                                                      autocomplete="off"
                                                            />
                                                            {errors?.subject?.type === "required" && (
                                                                      <p className="error">This field is required</p>
                                                            )}
                                                            {errors?.subject?.type === "maxLength" && (
                                                                      <p className="error">
                                                                                subject cannot exceed 30 characters
                                                                      </p>
                                                            )}
                                                            {errors?.subject?.type === "minLength" && (
                                                                      <p className="error">
                                                                                subject must be 5 characters
                                                                      </p>
                                                            )}
                                                            {errors?.subject?.type === "pattern" && (
                                                                      <p className="error">Alphabetical characters only</p>
                                                            )}
                                                            <textarea
                                                                      {...register("Describe", {
                                                                                required: true,
                                                                                maxLength: 150,
                                                                                minLength: 10,
                                                                                pattern: /^[A-Za-z]+$/i
                                                                      })}
                                                                      name="Describe"
                                                                      id="text"
                                                                      cols="20"
                                                                      rows="10"
                                                                      className="placeholder:text-white text-[24px]  mt-4 "
                                                                      placeholder="Describe your Message here..."
                                                            />
                                                            {errors?.Describe?.type === "required" && (
                                                                      <p className="error">This field is required</p>
                                                            )}
                                                            {errors?.Describe?.type === "maxLength" && (
                                                                      <p className="error">
                                                                                Discriptions cannot exceed 150 characters
                                                                      </p>
                                                            )}
                                                            {errors?.Describe?.type === "minLength" && (
                                                                      <p className="error">
                                                                                Discriptions  must be  10 Words
                                                                      </p>
                                                            )}
                                                            {errors?.Describe?.type === "pattern" && (
                                                                      <p className="error">Alphabetical characters only</p>
                                                            )}
                                                            <input type="submit" className="mt-6" value="Send Message " />
                                                            {show && (
                                                                  <p className="sucess">Your Form have submited</p>     
                                                            )}
                                                  </form>
                                        </div>
                              </div>
                    </div>
          );
}

export default Form