import React from 'react';
import {ServicesItemComponent} from "../../Components/ServicesItemCompoonent/ServicesItemComponent";

export function ParkComponent() {
    return (
        <>
            <ServicesItemComponent
                customClass={'park-service-item'}
                title={'АВТОПАРК'}
                description={'Оперативную и своевременную доставку, в любую точку Украины, гарантирует наличие собственного автопарка. Полное управление всеми организационными процессами помогает обеспечить необходимую  транспортировку в кратчайшие сроки.'}
                textPartAlignment={'right'}
            />
        </>
    );
}