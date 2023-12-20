import { FC } from 'react'
import { AiFillFacebook  , AiFillTwitterSquare , AiFillYoutube , AiFillInstagram  } from "react-icons/ai";
const Footer: FC = () => {
    return (
        <>
            <div className='flex justify-center py-16'>  {/* px-16 */}
                <div className='flex w-11/12 justify-between'> {/* flex px-16 py-16 justify-around w-10/12 align-middle */}
                    <div className='w-4/6 pr-16'> {/* w-3/5 */}
                        <h1 className='pb-4'>IMAGE <strong>SEARCH</strong></h1>
                        <p className='leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quis unde soluta error recusandae, debitis magni quisquam? Obcaecati, tempore distinctio ab dignissimos impedit facilis hic excepturi modi, ipsum adipisci soluta.
                            Illum dolor magni amet obcaecati, perspiciatis quis, adipisci consequatur deleniti aperiam necessitatibus earum quaerat aliquid eveniet excepturi nesciunt porro nihil nisi ab minus rem cum ipsum. Ratione optio doloremque eum?
                            Illum dolor magni amet obcaecati, perspiciatis quis, adipisci consequatur deleniti aperiam necessitatibus earum quaerat aliquid eveniet excepturi nesciunt porro nihil nisi ab minus rem cum ipsum. Ratione optio doloremque eum?
                        </p>
                    </div>
                    <div className='w-1/12'> {/* w-1/5 */}
                        <h2 className='font-bold pb-2'>Quick Links</h2>
                        <ul>
                            <li className='py-2'>Home</li>
                            <li className='py-2'>About</li>
                            <li className='py-2'>Contact</li>
                        </ul>
                    </div>
                    <div className='w-1/12'>
                        <h2 className='font-bold pb-4'>Support</h2>
                        <p>FAQ's</p>
                    </div>
                    <div className='w-2/12'>
                        <h2 className='font-bold'>Contact Us</h2>
                        <p className='py-4'>Email:imagen@search.com</p>
                        <div>
                            <ul className='flex'>
                            <AiFillFacebook size={30} color='blue'/>
                            <AiFillTwitterSquare size={30} color='skyblue'/>
                            <AiFillYoutube size={30} color='red'/>
                            <AiFillInstagram size={30} color='grey'/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr className='w-full' />
                <p className='text-center py-8'>2023 © <strong>Image Search.</strong> All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer