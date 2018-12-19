import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ArrowRightIcon from '../../../../Assets/Images/arrowRight.png';

export default function ArrowRight(props) {
  const { className, position, onClick} = props;
  console.log(JSON.stringify(position[2].lg))
  return (
    <ArrowStyle
      src={ArrowRightIcon}
      className={className}
      onClick={onClick}
      position={position}
    />
  );
}

const ArrowStyle = styled.img`
  width:10px;
  height:20px;
  margin:10px;
  ${breakpoint('sm')`
  width:14px;
  height:28px;
  right: ${props => props.position[0].sm};
  `}
  ${breakpoint('md')`
  width:14px;
  height:28px;
  right: ${props => props.position[1].md};
  `}
  ${breakpoint('lg')`
  right: ${props => props.position[2].lg};
	`}
`