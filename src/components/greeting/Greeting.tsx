import style from './greeting.module.css';
import animBeans from '../../images/animation-pinks.gif';

const Greeting = () => {

  return (
    <div className="display_greeting">
      <div className={style.container}>
        <img src={animBeans} alt="Jelly Belly Wiki Logo"></img>
        <div className={style.text_wrapper}>
          <h1>Welcome to the World of Jelly Belly:</h1>
          <h3>A Rainbow of Flavors Awaits!</h3>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
