import React, {Component} from 'react';
import './ProductsContainerStyles.scss';

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
        scrollDirection: ''
    };

    playAnimation = (direction) => {
        this.setState({isAnimationPlaying: true, scrollDirection: direction});

        setTimeout(() => {
            return (this.setState({isAnimationPlaying: false, scrollDirection: ''}));
        }, 1850);
    };

    pageDown = () => {
        this.setState({scrollingIsActive: true, activePage: this.state.activePage + 1}, () => { console.log('page ' + this.state.activePage)});

        this.playAnimation('down');

        setTimeout(() => {
            return (this.setState({scrollingIsActive: false}));
        }, 1850);
    };

    pageUp = () => {
        this.setState({scrollingIsActive: true, activePage: this.state.activePage - 1}, () => { console.log('page ' + this.state.activePage)});

        this.playAnimation('up');

        setTimeout(() => {
            return (this.setState({scrollingIsActive: false}));
        }, 1850);
    };

    handleWheel = (e) => {
        const event = e.nativeEvent;
        const {scrollingIsActive} = this.state;

        if (event.wheelDelta < 0 || event.details > 0) {
            !scrollingIsActive && this.pageDown();
        } else if (event.wheelDelta > 0 || event.details < 0) {
            !scrollingIsActive && this.pageUp();
        }
    };

    render () {
        const {isAnimationPlaying, scrollDirection} = this.state;

        return (
            <>
                {isAnimationPlaying ? (animation(scrollDirection)) : null}

                <div className='testDiv' onWheel={(e) => {this.handleWheel(e)}}/>
            </>
        );
    }
}

