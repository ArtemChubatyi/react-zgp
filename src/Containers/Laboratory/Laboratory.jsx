import React from 'react';
import {ServicesItemComponent} from "../../Components/ServicesItemCompoonent/ServicesItemComponent";

function Laboratory() {
    return (
        <ServicesItemComponent
            customClass={'development-service-item'}
            title={'РАЗРАБОТКА'}
            description={'Квалифицированные сотрудники предприятия разработают и изготовят  индивидуальный макет упаковки, учитывая специфику именно вашей продукции. На все виды гофроупаковки возможно нанесение одно или двухцветной флексографической печати.'}
            textPartAlignment={'right'}
        />
    );
}
export default Laboratory;