import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

export default class FullNameInput extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    // const { value } = this.state;
    return (
      <ThemeProvider theme={Themes}>
      <Container>
      <LabelDiv>  
      <Label>Full Name</Label><P>Required</P><br />
      </LabelDiv> 
        <Input
          value={this.state.value}
          name="input-text"
          label="Company Name"
          onChange={this._handleChange}
          id="name"
        />
      </Container>
      </ThemeProvider>
    )
  }
}
const Container = styled.div`
  padding-left: 0;
  margin-top: 0;
  width: 100%;
  height: auto;
  margin-bottom:50px;
  ${breakpoint('lg')`
  margin-bottom: 10%;
  `}
`
const LabelDiv = styled.div`
  display: flex;
  align-items: flex-end;
`
const Label = styled.label`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.black}
  color: ${Themes.colors.black};
  `;

const P = styled.p`
  font-size: ${Themes.fontsize.p4};
  font-weight: ${Themes.fontWeight.bold};
  color: ${Themes.colors.w_red};
  margin: 0;
  margin-left: 10px;
  padding:0;
`;

const Input = styled.input.attrs({
  type: 'text'
})`
  box-sizing:border-box;
  width:100%;
  height:30px;
  background: none;
  border-radius:0px;
  border:0;
  border-bottom: 1px solid ${Themes.colors.formGrey};
  color: ${Themes.colors.formGrey};
  //padding: ${props => props.padding}
  padding: 0.5em;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #ccc;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #ccc;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #ccc;
  }
  ${breakpoint('lg')`
  width:70%;
  `}
`