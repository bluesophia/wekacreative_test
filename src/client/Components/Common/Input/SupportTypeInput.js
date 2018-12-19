import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Button01 from '../Button/Button01'

export default class SupportTypeInput extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    
      render() {
        return (
            
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
            <Button01 />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      }
}

const Container = styled.div`
  padding-left: 0;
  margin-top: 0;
  width: 100%;
  height: 100%;
  margin-bottom:3em;
`
const Label_Div = styled.div`
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
  maxlength: 500,
  rows:8
})`
  box-sizing:border-box;
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
`