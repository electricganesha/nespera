import { useState } from 'react';
import Image from "next/image";
import cc from 'classcat';
import styles from './RecipeCard.module.scss';

const RecipeCard = ({ recipe }) => {
    const [isHoveringCard, setIsHoveringCard] = useState(false);

    return <div className={styles.card} onMouseOver={() => setIsHoveringCard(true)} onMouseOut={() => setIsHoveringCard(false)}>
        <a href={recipe.url} target="_blank" rel="noreferrer">
            <Image
                placeholder='blur'
                blurDataURL={recipe.image}
                className={cc([
                    styles.card__image,
                    {
                        [styles['card__image--hover']]: isHoveringCard
                    },
                ])}
                src={recipe.image}
                width="300"
                height="150"
                alt={recipe.name}
            />
            <p className={cc([
                styles.card__name,
                {
                    [styles['card__name--hover']]: isHoveringCard
                },
            ])}>{recipe.name}</p>
        </a>
    </div >
}

export default RecipeCard;
