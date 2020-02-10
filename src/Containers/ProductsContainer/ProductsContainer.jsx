import React, {Component} from 'react';
import './ProductsContainerStyles.scss';
import {ServicesItemComponent} from "../../Components/ServicesItemCompoonent/ServicesItemComponent";
import {ProductsItemComponent} from "../../Components/ProductsItemComponet/ProductsItemComponent";
import {Preloader} from "../Preloader/Preloader";

const animation = (direction) => {
    const className = `verticalColumn ${direction === 'up' ? 'inverse' : ''}`;

    return (
        <div className='animation'>
            <div className={className}/>
            <div className={className}/>
            <div className={className}/>
            <div className={className}/>
            <div className={className}/>
            <div className={className}/>
            <div className={className}/>
            <div className={className}/>
        </div>
    )
};

export class ProductsContainer extends Component  {
    state = {
        activePage: 1,
        scrollingIsActive: false,
        isAnimationPlaying: false,
        scrollDirection: '',
        amountOfProducts: 3
    };

    playAnimation = (direction) => {
        this.setState({isAnimationPlaying: true, scrollDirection: direction});

        setTimeout(() => {
            return (this.setState({isAnimationPlaying: false, scrollDirection: ''}));
        }, 1850);
    };

    pageDown = () => {
        this.setState({scrollingIsActive: true});

        this.playAnimation('down');

        setTimeout(() => {
            return (this.setState({activePage: this.state.activePage + 1}));
        }, 1050);
        setTimeout(() => {
            return (this.setState({scrollingIsActive: false}));
        }, 1850);
    };

    pageUp = () => {
        this.setState({scrollingIsActive: true});

        this.playAnimation('up');

        setTimeout(() => {
            return (this.setState({activePage: this.state.activePage - 1}));
        }, 1050);
        setTimeout(() => {
            return (this.setState({scrollingIsActive: false}));
        }, 1850);
    };

    handleWheel = (e) => {
        const event = e.nativeEvent;
        const {scrollingIsActive, amountOfProducts, activePage} = this.state;

        if (event.wheelDelta < 0 || event.details > 0) {
            if (activePage < amountOfProducts) {
                !scrollingIsActive && this.pageDown();
            }
        } else if (event.wheelDelta > 0 || event.details < 0) {
            if (activePage > 1) {
                !scrollingIsActive && this.pageUp();
            }
        }
    };

    getProductItem =  () => {
        switch (this.state.activePage) {
            case 1:
                return <ProductsItemComponent
                    customClass={'development-service-item'}
                    title={'ГОФРОЯЩИК'}
                    description={'Наиболее распространенный тип упаковки для транспортировки продукции - это четырехклапанный ящик. Прост в использовании как при ручной упаковке, так и при автоматизированной. Производим в любых количествах по размерам заказчика.'}
                    textPartAlignment={'right'}ß
                />;
            case 2:
                return <ProductsItemComponent
                    customClass={'laboratory-service-item'}
                    title={'СЛОЖНАЯ ВЫСЕЧКА'}
                    description={'Лотки с открытым верхом или с крышкой, шоу-боксы, оберточные ящики. Изготовим любую продукцию по Вашим чертежам с использованием штанц-форм.'}
                    textPartAlignment={'left'}
                />;
            case 3:
                return  <ProductsItemComponent
                    customClass={'park-service-item'}
                    title={'ГОФРОЛИСТ'}
                    description={'Изготавливаем трехслойный гофрокартон с профилем гофра В и С. При производстве используется картон и бумага отечественных и иностранных производителей - по желанию заказчика.'}
                    textPartAlignment={'right'}
                />;
        }
    };

    handleClickSlider = (page) => {
        this.setState({scrollingIsActive: true});

        this.playAnimation('up');

        setTimeout(() => {
            return (this.setState({activePage: page}));
        }, 1050);
        setTimeout(() => {
            return (this.setState({scrollingIsActive: false}));
        }, 1850);
    };

    render () {
        const {isAnimationPlaying, scrollDirection, activePage} = this.state;

        return (
            <>
                {isAnimationPlaying ? (animation(scrollDirection)) : null}
                <Preloader/>
                <div className='testDiv' onWheel={(e) => {this.handleWheel(e)}}>
                    {this.getProductItem()}
                </div>
                <div className='slider-buttons'>
                    <button className={`slider-button${activePage === 1 ? ' active' : ''}`} onClick={() => this.handleClickSlider(1)}/>
                    <button className={`slider-button${activePage === 2 ? ' active' : ''}`} onClick={() => this.handleClickSlider(2)}/>
                    <button className={`slider-button${activePage === 3 ? ' active' : ''}`} onClick={() => this.handleClickSlider(3)}/>
                </div>
            </>
        );
    }
}

