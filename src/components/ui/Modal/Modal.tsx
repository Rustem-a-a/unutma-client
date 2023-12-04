import styles from './Modal.module.scss'

import React, {FC, useEffect, useRef} from 'react';
import Button from "../Button/Button";

interface IProps {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    yes: string;
    no: string;
    action: () => void;
}

const Modal: FC<IProps> = ({
                               setIsModal,
                               title,
                               yes,
                               no,
                               action
                           }) => {
    const modalDivRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (modalDivRef.current) {
            modalDivRef.current.focus();
        }
    }, [modalDivRef.current])
    return (
        <div className={styles.wrapper}
             ref={modalDivRef}
             tabIndex={100}
             onKeyDown={e => {
                 if (e.key === 'Escape') {
                     setIsModal(false)
                 }
                 if (e.key === 'Enter') {
                     action();
                     setIsModal(false);
                 }
             }}
             onClick={() => {
                 setIsModal(false);
             }}>
            <div
                className={styles.window}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <p>{title}</p>
                <div className={styles.buttons}>
                    <Button
                        title={yes}
                        theme="red"
                        onClick={() => {
                            action()
                            setIsModal(false)
                        }}
                        displayTitle={true}
                    />
                    <Button
                        title={no}
                        theme="green"
                        onClick={() => {
                            setIsModal(false)
                        }}
                        displayTitle={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
