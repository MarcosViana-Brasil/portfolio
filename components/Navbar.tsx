import { useState, useEffect, FunctionComponent } from "react"
import { useRouter } from "next/router"
import Link from 'next/link'

const Navitem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem, name, route, setActiveItem}) => {
  return (
    activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)} className='hover:text-green-400'>{name}</span>
        </a>
      </Link>
    ): null
  )
}

export const Navbar = () => {

  const [activeItem, setActiveItem] = useState<string>('About')

  const { pathname } = useRouter()

  // useEffect(() => {
  //   if(pathname == '/') setActiveItem('About')
  //   if(pathname == '/projects') setActiveItem('Projects')
  //   if(pathname == '/resume') setActiveItem('Resume')
  // }, [])

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className='text-xl font-bold text-green-400 border-b-4 border-green-500 md:text:2xl'>
        {activeItem}
      </span>
      <div className='flex space-x-5 text-lg'>
        <Navitem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
        <Navitem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
        <Navitem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
      </div>
    </div>
  )
}

