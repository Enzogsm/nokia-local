import style from "../sessao/sessao.module.css";
import cellNokia from "../../assets/img/imagem-de-fundo.webp";
import MulherNokia from "../../assets/img/mulher-da-nokia.webp";

const Sessao = () => {
  return (
    <section className={style.Sessao}>
      <div className={style.SessaoWrapper}>
        <div className={style.SessaoContent}>
          <h1>IA: sempre inovando</h1>
          <p>
            Redes cognitivas alimentadas por IA promovem negócios e sociedade
          </p>
        </div>
        <div className={style.SessaoImg}>
          <div className={style.containerMulher}>
            <img src={MulherNokia} alt="imagem da mulher" />
          </div>
        </div>
      </div>
      <div className={style.imgContainer}>
        <img className={style.imgFundo} src={cellNokia} alt="celular" />
      </div>
    </section>
  );
};

export default Sessao;
