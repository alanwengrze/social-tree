import {FaInstagram, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
export function Icon(){
    return(
        <div className='w-full flex justify-evenly'>
            <p className='text-2xl hover:text-indigo-500 duration-500'><FaInstagram /></p>
            <p className='text-2xl hover:text-indigo-500 duration-500'><FaGithub /></p>
            <p className='text-2xl hover:text-indigo-500 duration-500'><FaLinkedin /></p>
            <p className='text-2xl hover:text-indigo-500 duration-500'><FaTwitter /></p>
        </div>
    )
}