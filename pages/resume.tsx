import Bar from "../components/Bar";
import { languages, tools } from "../data";

export default function resume() {
  return (
    <div className='px-6 py-2'>
      {/* education & experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className='my-3 text-xl font-bold'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Software Engineering</h5>
            <p className='font-semibold'>Unicid(2021 - on)</p>
          </div>          
          <p className='my-3'>I am currently in the postgraduate course in Software Engineering</p>
        </div>       

        <div>
          <div>
            <h5 className='my-3 text-xl font-bold'>Experience</h5>
            <div>
              <h5 className='my-2 text-xl font-bold'>Systems Analyst</h5>
              <p className='font-semibold'>CVC (2018 - on)</p>
            </div>
            <p className='my-3'>I work on Software Quality testing (Q&A) and automation logic development</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-2 text-xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {
              languages.map(language => (<Bar data={language} key={language.name} />))
            }
          </div>
        </div>

        <div>
          <h5 className="my-2 text-xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {
              tools.map(tool => (<Bar data={tool} key={tool.name} />))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
