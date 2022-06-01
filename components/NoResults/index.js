import styles from './NoResults.module.scss';

const NoResults = () => {
    return <div className={styles.empty}>
        <p>Ups, pedimos desculpa, mas n&atilde;o encontr&aacute;mos resultados para esta pesquisa. Eis outras receitas para si :</p>
    </div>
}

export default NoResults;
