import React from 'react'
import { NavLink } from 'react-router-dom'
const NavComp = (props) => {
    const { cartItems } = props;
    const total = ()=>{
        let sum = 0;
        cartItems.forEach((p) => {
          sum += p.qty;
        });
          return sum;
    }
    //const canasta = [...cartItems]
    const ManegeColor = { active: '#EB6440', notActive: '#497174' }
    //greenyellow
    return (
        <nav className='bg-[#EFF5F5] flex h-20 items-center justify-between  text-xl px-12'>
            <p className='text-slate-500 hover:text-blue-600'>Nav</p>
            <div className='flex justify-end space-x-4'>
                <NavLink to="/" style={({ isActive }) => ({
                    color: isActive ? ManegeColor.active : ManegeColor.notActive
                })}>
                    Home
                </NavLink>
                <NavLink to="/about" style={({ isActive }) => ({
                    color: isActive ? ManegeColor.active : ManegeColor.notActive
                })}>
                    About
                </NavLink>
                <NavLink to="/cart" style={({ isActive }) => ({
                    color: isActive ? ManegeColor.active : ManegeColor.notActive
                })}>
                    Cart
                    <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">
                        {total()}
                    </span>
                </NavLink>
            </div>
        </nav>
    )
}

export default NavComp
