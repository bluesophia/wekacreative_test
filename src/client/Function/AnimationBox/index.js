import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';  

const Wrapper = styled.div`
`

const AnimationBox = () => (
    <Motion
        defaultStyle={{ scaleY: 0 }}
        style={{ scaleY: spring(1) }}
    >
        {(style) => (
        <AnimationBox 
            scaleY={style.scaleY}
            style={{ 
                transform: `scaleY(${style.scaleY})`,
            }}
        />
        )}
    </Motion>
);

AnimationBox.propTypes = {};

const AnimationBox = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkPassafe2}');
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`

export default AnimationBox;