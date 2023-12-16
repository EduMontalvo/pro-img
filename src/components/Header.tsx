import { FC } from 'react'
const Header: FC = () => {
    return (
        <div className='flex justify-between px-4 py-2'>
            <h1>LOGO</h1>
            <nav>
                <ul className='flex gap-4 flex-row'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header