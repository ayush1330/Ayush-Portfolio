import { Hero, Navbar } from "./components";
import { 
  LazyAbout, 
  LazyContact, 
  LazyExperience, 
  LazySkills,
  LazyTech, 
  LazyWorks, 
  LazyFooter 
} from "./components/LazyComponent";

const App = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='relative'>
        <Navbar />
        <Hero />
      </div>
      <LazyAbout />
      <LazyExperience />
      <LazyWorks />
      <LazySkills />
      <LazyTech />
      <div className='relative z-0'>
        <LazyContact />
        <LazyFooter/>
      </div>
    </div>
  );
}

export default App;
