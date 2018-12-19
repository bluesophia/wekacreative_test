import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ArrowLeftIcon from '../../../../Assets/Images/arrowLeft.png';

export default function ArrowLeft(props) {
  const { className, position, onClick } = props;
  return (
    <ArrowStyle
      src={ArrowLeftIcon}
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
  `}
  ${breakpoint('md')`
  width:14px;
  height:28px;
  `}
  ${breakpoint('lg')`
	`}
`