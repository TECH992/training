import React from 'react'

export default function About() {
          return (
                    <div className="py-24 bg-white">
                              <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                  <div className="md:5/12 lg:w-5/12">
                                                            <img
                                                                      src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                                                                      alt="startup"
                                                            />
                                                  </div>
                                                  <div className="md:7/12 lg:w-6/12">
                                                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                                                      React development is carried out by passionate developers
                                                            </h2>
                                                            <p className="mt-6 text-gray-600">
                                                            : React developers primarily focus on building the user interface of web applications. They create reusable UI components that can be combined to create complex UIs. React uses a component-based architecture, which makes it easier to manage and maintain UI code.
                                                            </p>
                                                            <p className="mt-4 text-gray-600">
                                                            React developers need a strong understanding of JavaScript, as React is a JavaScript library. They should be familiar with ES6+ features, asynchronous programming, and the concepts of JavaScript development.
                                                            </p>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          );
}
