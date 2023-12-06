import React, {FC} from 'react';
import styles from './Button.module.scss'

type theme = 'green' | 'blue' | 'red' | 'gray'

interface IProps {
    theme?: theme;
    title: string;
    icon?: string;
    scaleImg?: number;
    onClick?: () => void;
    displayTitle?: boolean;
}

const Button: FC<IProps> = ({
                                theme = 'gray',
                                title,
                                icon,
                                scaleImg,
                                onClick,
                                displayTitle
                            }) => {
    return (
        <div
            title={title}
            onClick={onClick}
            className={`${styles.button} ${styles[theme]}`}>
            {icon && <img
                src={`/icons/${icon}`}
                alt={icon}
                style={{width: scaleImg, height: scaleImg}}/>
            }
            <span>{title}</span>
            {displayTitle && <span className={styles.displayTitle}>{title}</span>}
        </div>

    );
};

export default Button;
