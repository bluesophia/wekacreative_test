import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Themes from '../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import Text from '../../Components/Common/Text';
import BigTitle from '../../Components/Common/Title/BigTitle.js';
import Section01Bg from '../../../Assets/Images/support.png';

import { UploadInput,
          CompanyNameInput,
          EmailInput,
          MessageInput,
          FullNameInput }from '../../Components/Common/Input';
import Button from '../../Components/Common/Button';

class FileScreen extends Component {
    render(){
        return(
            <h1>upload</h1>
        )
    }
}