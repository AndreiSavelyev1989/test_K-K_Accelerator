import styles from "./App.module.css";
import {Button} from "./components/button/Button";
import {useState} from "react";

export const App = () => {

    const [mainBtnValue, setMainBtnValue] = useState(1);
    const [editMode, setEditMode] = useState(false);

    const mainBtnHandler = () => {
        setEditMode(!editMode);
    }
    const mainBtnValueHandler = (e) => {
        setMainBtnValue(e.target.value);
        setEditMode(false);
    }

    return (
        <div className={styles.app}>
            <Button value={mainBtnValue}
                    callback={mainBtnHandler}/>
            <div
                onClick={mainBtnValueHandler}
                className={editMode
                    ? styles.activeContentContainer
                    : styles.deActiveContentContainer}>
                <Button value={1}/>
                <Button value={2}/>
                <Button value={3}/>
            </div>
        </div>
    );
}
