import React, { useRef } from 'react';

export const HooksRef4 = () => {
          const inputText = useRef();

          const inputEvent = () => {
                    console.log(inputText.current.value); // Access the value property of the ref to get the input value
          };

          return (
                    <div>
                              <input
                                        placeholder="write-todo.."
                                        className="border-[4px] border-[#758283] py-4 px-4 outline-none rounded-[50px]"
                                        ref={inputText}
                                        onChange={inputEvent}
                              />
                    </div>
          );
};
