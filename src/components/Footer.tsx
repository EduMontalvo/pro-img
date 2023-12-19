import { FC } from 'react'
const Footer: FC = () => {
    return (
        <div className='flex px-16 py-16 justify-between'>
            <div className=''> {/* w-2/5 */}
                <h1>IMAGE <strong>SEARCH</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quis unde soluta error recusandae, debitis magni quisquam? Obcaecati, tempore distinctio ab dignissimos impedit facilis hic excepturi modi, ipsum adipisci soluta.
                    Illum dolor magni amet obcaecati, perspiciatis quis, adipisci consequatur deleniti aperiam necessitatibus earum quaerat aliquid eveniet excepturi nesciunt porro nihil nisi ab minus rem cum ipsum. Ratione optio doloremque eum?
                </p>
            </div>
            <div className=''> {/* w-1/5 */}
                <h2 className='font-bold'>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className=''>
                <h2 className='font-bold'>Support</h2>
                <p>FAQ's</p>
            </div>
            <div className=''>
                <h2 className='font-bold'>Contact Us</h2>
                <p>Email:imagen@search.com</p>
                <div>
                    <ul className='flex'>
                        <li>ico1</li>
                        <li>ico2</li>
                        <li>ico3</li>
                        <li>ico4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer