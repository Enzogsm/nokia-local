import style from "../sessaoCelular/sessaoCelular.module.css";
import celular1 from "../../assets/img/celular-nokia.png";
import celular2 from "../../assets/img/celular-nokia2.webp";
import celular3 from "../../assets/img/celular-nokia3.png";



const sessaoCelular = () => {
  return (
    <section className={style.sessaoCelular}>
      <div className={style.sessaoWrapper}>
        <div className={style.sessaocontent}>
         <img src={celular1} alt="primeira imagem de celular" />
        </div>
        <div className={style.celular2}>
          <img src={celular2} alt="segunda imagem de celular" />
        </div>
        <div className={style.celular3}>
          <img src={celular3} alt="terceira imagem de celular" />
        </div>
      </div>
    </section>
  );
};

export default sessaoCelular;
   