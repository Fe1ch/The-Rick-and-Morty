import "./CardList.css";
import React from "react";
import Card from "../Card/Card";
import {FilterCheckbox} from "../FilterCheckbox/FilterCheckbox";

export const CardList: React.FC = () => {


    return (
        <section className='cards'>
            <FilterCheckbox/>
            <ul className='cards__list'>
                <Card/>
            </ul>
        </section>
    );
};
