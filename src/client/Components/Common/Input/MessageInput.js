import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

export default class MessageInput extends Component {
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
          <Label>Message</Label><P>Required</P><br />
          </LabelDiv>
            <Input
              value={this.state.value}
              name="text"
              label="label"
              onChange={this._handleChange}
              style={{height:this.props.height}}
              id="message"
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
  margin-bottom:3em;
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
`

const P = styled.p`
  font-size: ${Themes.fontsize.p4};
  font-weight: ${Themes.fontWeight.bold};
  color: ${Themes.colors.w_red};
  margin: 0;
  margin-left: 10px;
  padding:0;
`

const Input = styled.textarea.attrs({
  maxLength: 500,
  rows:8,
})`
  box-sizing:border-box;
  resize: none;
  width:100%;
  height:auto;
  background: none;
  border-radius: 5px;
  border: 1px solid ${Themes.colors.formGrey};
  color: ${Themes.colors.formGrey};
  padding:0.5em;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
`