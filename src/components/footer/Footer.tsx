import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <span>
        <strong>© Разработал Ромашев Алексей aka Antiart. Если бы были права, они бы были защищены.</strong>
      </span>
    </div>
  );
};

export default Footer;
