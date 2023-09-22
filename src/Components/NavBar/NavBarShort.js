import React from 'react'
import { NavLink } from 'react-router-dom'
const routes = [
          { path: '/', text: 'HomePage' },
          { path: '/contact', text: 'Contact' },
          { path: '/about', text: 'About' },
          { path: '/hooksEffect', text: 'hooksEffect' },
          { path: '/hooksReduce', text: 'hooksReduce' },
          { path: '/StateProps', text: 'StateProps' },
          { path: '/HooksRef1', text: 'HooksRef1' },
          { path: '/HooksRef', text: 'HooksRef' },
          { path: '/HooksRef2', text: 'HooksRef2' },
          { path: '/HooksRef3', text: 'HooksRef3' },
          { path: '/HooksRef4', text: 'HooksRef4' },
          { path: '/Counter', text: 'Counter' },
          { path: '/Button', text: 'Button' },
          { path: '/Todo', text: 'Todo' },
          { path: '/data', text: 'Data' },
          { path: '/HooksMemo', text: 'HooksMemo' },
          { path: '/Mount', text: 'Mount' },
          { path: '/Unmount', text: 'Unmount' },
          { path: '/Update', text: 'Update' },
          { path: '/HooksCallback', text: 'HooksCallback' },
          { path: '/MultipleStateIntoReducer', text: 'MultipleStateIntoReducer' },
         
          // Add more routes as needed
];


const NavBarShort = () => {
          return (
                    <div className='bg-[#0D0D0D] w-full h-[100px]'>
                              <div className='flex justify-between'>
                                        <ul className='text-16px cursor-pointer text-[#FFFFFF] font-bold flex px-8 pt-6'>
                                                  {routes.map((route) => (
                                                            <li key={route.path} className='px-2 hover:text-[#35BDD0]'>
                                                                      <NavLink to={route.path} activeClassName='text-[#E21717]'>
                                                                                {route.text}
                                                                      </NavLink>
                                                            </li>
                                                  ))}
                                        </ul>
                              </div>
                    </div>
          );

}

export default NavBarShort