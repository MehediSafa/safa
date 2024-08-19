import Header from "../components/header/Header";
import Banner from '../components/Banner/Banner'
import Howwork from '../components/howwork/Howwork'
import Projects from '../components/projects/Projects'
import Features from '../components/Features/Features'
import Clients from '../components/clients/Clients'
import Faq from '../components/faq/Faq'
import UserForm from '../components/userform/UserForm'
import Footers from "../components/footers/Footers";




const Home = () => {
  return (
    <>
     
      <Banner/>
     <Howwork/>
     <Projects/>
     <Features/>
     <Clients/>
     <Faq/>
     <UserForm/>
      
    </>

  )
}

export default Home