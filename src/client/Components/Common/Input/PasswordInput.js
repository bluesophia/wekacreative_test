
import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../../Assets/Styles/Themes';

export default class PasswordInput extends Component {
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
      <Label_Div>  
      <Label>{this.props.label}</Label><P>Required</P><br />
      </Label_Div> 
        <Input
          value={this.state.value}
          name="input-text"
          label="Password"
          onChange={this._handleChange}
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
  height: 100%;
  margin-bottom:50px;
`
const Label_Div = styled.div`
  display: flex;
  align-items: flex-end;
`
const Label = styled.label`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.bold}
  color: ${Themes.colors.blueLight};
  `;

const P = styled.p`
  font-size: ${Themes.fontsize.p3};
  font-weight: ${Themes.fontWeight.light};
  color: ${Themes.colors.grey};
  margin: 0;
  margin-left: 10px;
  padding:0;
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  box-sizing:border-box;
  width:100%;
  height:30px;
  background: none;
  border-radius: 0; 
  border: 0px;
  border-bottom: 1px solid ${Themes.colors.formGrey};
  color: ${Themes.colors.formGrey};
  //padding: ${props => props.padding}
  padding-left:0.5em;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  
`
