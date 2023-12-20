import { FC } from 'react'
const Header: FC = () => {
    return (
        <div className='flex justify-between px-8 py-6'>
            <h1>IMAGE <strong>SEARCH</strong></h1>
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