import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'

const Sidebar = () => {

  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light' )
  }

  return (
    <div>
      <img 
        src="/marcos.jpg" 
        alt="avatar" 
        className='w-32 h-32 mx-auto rounded-full'
      />
      <h3 className='my-3 text-2xl font-extrabold font-alex dark:text-white'>
        <span className='text-green-400'>Marcos </span>Viana
      </h3>
      
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:text-white'>Q&A - Automation Developer</p>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:text-white'>Mobile Developer</p>
      
      <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:text-white' href='#' download='name'> 
        <GiTie className='w-6 h-6'/>Download Resume
      </a>

      {/* social icons */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full mx:auto'>
        <a href=''>
          <AiFillYoutube className='w-8 h-8' cursor-pointer='true'/>
        </a>
        <a href=''>
          <AiFillGithub className='w-8 h-8' cursor-pointer='true'/>
        </a>
        <a href=''>
          <AiFillLinkedin className='w-8 h-8' cursor-pointer='true'/>
        </a>
      </div>

      {/* address */}
      <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:text-white' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>São Paulo/SP</span>          
        </div>
        <p className='my-2'>marcos1968@gmail.com</p>
        <p className='my-2'>(11) 96656-3563</p>
      </div>

      {/* email button */}
      <button 
        className='w-8/12 py-2 my-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 focus:outline-none'
        onClick={() => window.open('mailto:marcos1968@gmail.com')}
      >
        Email me
      </button>
      <button className='w-8/12 py-2 my-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600' onClick={changeTheme}>Toggle Theme</button>


    </div>
  )
}

export default Sidebar
