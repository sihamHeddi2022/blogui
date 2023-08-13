import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
export default function Home() {
  return (
    <div>

       <NavBar/>
       <Hero/>
        <Popular/>
        <h2 className='text-center  my-4'>
           Created by Siham Heddi 💘 2022 - 2023
        </h2>
    </div>
  )
}
