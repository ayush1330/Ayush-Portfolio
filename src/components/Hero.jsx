import { styles } from "../styles";
import { rockTexture } from "../assets";
import OptimizedImage from "./OptimizedImage";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center py-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <OptimizedImage
          src={rockTexture}
          alt="Background image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/50"></div>
      </div>
      
      {/* Main Content Container */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center items-center`}>
        

        {/* Hero Content */}
        <div className="flex-1 text-center max-w-3xl">
          <div className="space-y-12">
            <h1 className={`${styles.heroHeadText} leading-tight animate-fade-in-up`} style={{ animationDelay: '0.1s', color: '#9CA3AF' }}>
              Hi, I'm <span className='text-blue-300'>Ayush</span>
            </h1>
            
            <div className="space-y-4">
              <p className={`${styles.heroSubText} leading-relaxed animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
                
              </p>
              
              <p className={`${styles.heroSubText} ${styles.light} leading-relaxed animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
                I'm a people person from a small town, with a big-picture mindset. My passion lies in Agentic AI application, coupled with a dash of common sense, to craft simple yet effective solutions for complex problems, Working hard to better myself everyday and will take on every project I have time for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
