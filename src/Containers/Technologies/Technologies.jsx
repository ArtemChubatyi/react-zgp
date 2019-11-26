import React from 'react';
import {ServicesItemComponent} from "../../Components/ServicesItemCompoonent/ServicesItemComponent";

export function Technologies() {
    return (
        <>
            <ServicesItemComponent
                customClass={'technologies-service-item'}
                title={'ТЕХНОЛОГИИ'}
                description={'Наш завод располагает мощным парком автоматизированного оборудования для производства высококачественной упаковки из гофрокартона. Для производства используем как отечественное так и импортное сырьё, что дает нам возможность удовлетворять разнообразные запросы наших клиентов.'}
                textPartAlignment={'left'}
            />
        </>
    );
}
