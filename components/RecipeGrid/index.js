import styles from './RecipeGrid.module.scss';

const RecipeGrid = ({ children }) => {
    return <div className={styles.grid}>
        {children}
    </div>
}

export default RecipeGrid;
