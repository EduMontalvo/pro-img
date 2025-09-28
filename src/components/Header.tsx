import { FC } from 'react'
import {Link, Outlet } from 'react-router-dom'
const Header: FC = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-between py-6 w-11/12'>
                <h1>IMAGE <strong>SEARCH</strong></h1>
                <nav>
                    <ul className='flex gap-4 flex-row'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                        
{/*                         <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
 */}                </ul>
                </nav>
                <Outlet/>
            </div>
        </div>
    )
}

export default Header