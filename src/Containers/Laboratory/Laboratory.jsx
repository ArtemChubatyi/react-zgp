import React from 'react';
import {ServicesItemComponent} from "../../Components/ServicesItemCompoonent/ServicesItemComponent";

function Laboratory() {
    return (
        <ServicesItemComponent
            customClass={'laboratory-service-item'}
            title={'ЛАБОРАТОРИЯ'}
            description={'Главенствующей идеологией всего производственного процесса на предприятии  является постоянный контроль качества продукции. Непрерывную работу ведет специально оборудованная лаборатория, где отслеживаются все технические показатели и нормативные соответствия поступающего сырья и готового продукта.'}
            textPartAlignment={'left'}
        />
    );
}
export default Laboratory;