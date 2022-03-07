import React from "react";
import TableApplication from "../tableApplication";
import Map from "../map";
import s from './style.module.css'

const ScreenForm = () => {

    return (
        <div >

            <div className={s.wrap}>
                <div>
                    <TableApplication />
                </div>
                <div >
                    <Map />
                </div>
            </div>
        </div>
    );
}

export default ScreenForm;
