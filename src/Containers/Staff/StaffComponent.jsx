import React from 'react';
import {ServicesItemComponent} from "../../Components/ServicesItemCompoonent/ServicesItemComponent";

export function StaffComponent() {
    return (
        <ServicesItemComponent
            customClass={'staff-service-item'}
            title={'ПЕРСОНАЛ'}
            description={'Высококвалифицированные технологи, конструкторы и дизайнера, специалисты по сопровождению работы с клиентами, служба  транспортной и складской логистики выполняют комплекс услуг по любому запросу  и требованию наших клиентов.'}
            textPartAlignment={'left'}
        />
    );
}