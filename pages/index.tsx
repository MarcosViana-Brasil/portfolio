import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'


export default function index() {
  // console.log(services)

  return (
    <>
      <div className='flex flex-col flex-grow px-6 pt-1'>
        <h5 className='my-3 font-medium'>
          Com mais de 20 anos de experiência em Análise de Sistemas, dos quais muitos deles
          dedicados ao desenvovimento Web e mais recentemente (2+) no desenvovimento de 
          Mobile APP.< br/>
          Atualmente trabalho no desenvolvimento de lógicas de testes na área de Q&A da 
          maior companhia de turismo da America Latina 😎
        </h5>
        <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-200 dark:text-white' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
          <h6 className='my-3 text-xl font-bold tracking-wide'>Minhas qualificações</h6>
          <div className='grid gap-6 lg:grid-cols-2'>
            {services.map(service => (
              <div key={service.title} className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200 dark:text-white">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>      
      </div>
      {/* <div style={{marginTop: 50, marginLeft: 530, fontSize: 12}}>
        "Sorry, my english is a work in progress"
      </div> */}
    </>
  )
}


//-------------------------------
// inicio video 06
//-------------------------------


// export const getServerSideProps = async (context:GetServerSidePropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services);
  

//   return { 
//     props: {
//       services: data.services,
//     } 
//   }
// }

// export const getStaticProps = async (context:GetStaticPropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services);
  

//   return { 
//     props: {
//       services: data.services,
//     } 
//   }
// }