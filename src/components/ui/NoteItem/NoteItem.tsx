import React, {FC, useRef} from 'react';
import styles from './NoteItem.module.scss'

interface IProps {
    itemId: string;
    checked: boolean;
    itemTitle: string;
    handleChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleChangeDelete: (itemId: string) => void;
}

const NoteItem: FC<IProps> = ({
                                  itemId,
                                  itemTitle,
                                  checked,
                                  handleChangeCheckbox,
                                  handleChangeInput,
                                  handleChangeDelete,
                              }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if ((event.key === 'Enter' || event.key === 'Escape') && inputRef.current) {
            inputRef.current.blur()
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.checkTitle}>
                <input
                    id={itemId}
                    onChange={e => handleChangeCheckbox(e, itemId)} checked={checked} type="checkbox"/>
                <label
                    htmlFor={itemId}
                    className={styles.itemTitle}>{itemTitle}
                </label>
                <input
                    className={styles.changeTitle}
                    ref={inputRef}
                    value={itemTitle}
                    onChange={e => handleChangeInput(e, itemId)}
                    onKeyDown={handleKeyDown}/>
            </div>
            <div className={styles.deleteEdit}>
                <img
                    src="/icons/delete.svg"
                    alt="Delete item"
                    title="Delete item"
                    onClick={() => handleChangeDelete(itemId)}/>
            </div>
        </div>
    );
};

export default NoteItem;
