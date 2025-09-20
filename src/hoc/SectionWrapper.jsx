import { styles } from "../styles";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className='hash-span'>
          &nbsp;
        </span>

        <Component />
      </section>
    );
  };

export default SectionWrapper;
