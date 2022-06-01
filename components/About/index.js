import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <p>
        <span>Nêspera</span> é um projecto amador que tenciona ser um agregador
        / motor-de-busca de receitas em língua Portuguesa. Imaginamos que
        algumas razões para a sua utilização e disseminação possam ser as
        seguintes:
      </p>
      <ul>
        <li>
          Utilização de ingredientes e recursos já existentes para evitar
          desperdício
        </li>
        <li>
          Adiar a ida as compras o mais possivel - as vezes quando achamos que
          nao podemos cozinhar nada... afinal podemos
        </li>
        <li>
          Mapear por ingredientes permite p. ex. determinar o CO2e de uma
          refeicao no futuro
        </li>
        <li>
          Neste momento mapeia apenas receitas do Pingo Doce (cerca de 2.000).
          Em breve poderá ainda constar com receitas do Continente, 24kitchen.pt
          e cookidoo (bimby). No total deverá ficar com cerca de 16.000 receitas
          para o público português.
        </li>
      </ul>
      <p>
        No aspecto técnico, utilizamos um web-crawler escrito em Python para
        obter receitas de várias fontes, e fuzzy search (através do &nbsp;
        <a href="https://fusejs.io">fuse.js</a>) para a pesquisa. A aplicação
        está construída sobre a framework <a href="nextjs.org/">Next.js</a> e
        utiliza <a href="https://reactjs.org/">React</a>&nbsp;no front-end.
      </p>
    </div>
  );
};

export default About;
