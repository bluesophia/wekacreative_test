import React, { Component, Fragment } from "react";
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import ReactDropzone from 'react-dropzone'

export default class UploadInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
     });
  }

  handleUpdateValue = (value) => {
    this.setState({ value: value });
  }

  render() {
    return (
      <ThemeProvider theme={Themes}>
      <Container>
        <div className="app">
          <ReactDropzone
            style={DropzoneStyle}
            accept="image/*"
            onDrop={this.onPreviewDrop}
          >
            <Label>Upload a screenshot</Label><br />
              <p>Drop an image, or Click here!</p>
          </ReactDropzone>
          <br /><br />
            {this.state.files.length > 0 &&
              <Fragment>
                <h3>Previews</h3>
                {this.state.files.map((file) => (
                  <img
                    alt="Preview"
                    key={file.preview}
                    src={file.preview}
                    style={previewStyle}
                  />
                ))}
              </Fragment>
            }
        </div>
      </Container>
      </ThemeProvider>
    )
  }
}
const Container = styled.div`
  padding-left: 0em;
  width: 100%;
  height: 100%;
`
const Label = styled.label`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.bold}
  color: ${Themes.colors.blueLight};
  `;

  const previewStyle = {
    display: 'inline',
    width: 100,
    height: 100,
  };
  const Previews = styled.p`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.bold}
  color: ${Themes.colors.blueLight}
  `
  const DropzoneStyle = {
    // width: '500px',
    height: '30px',
  }
/*const Input = styled.input.attrs({
  // type: 'file',
})`
  box-sizing:border-box;
  width:100%;
  background: black;
  border-radius: 5px;
  border: 1px solid ${Themes.colors.formGrey};
  color: ${Themes.colors.formGrey};
  //padding: ${props => props.padding}
  padding: 0.5em;
  margin-top: 10px;
  &:focus {
    outline: none;
  }

  ${breakpoint('xs')`
    width:87vw;
    height:20px;
  `}
  ${breakpoint('sm')`
    width:87vw;
    height:20px;
  `}
  ${breakpoint('md')`
    width:59vw;
    height:25px;
  `}
  ${breakpoint('lg')`
    width:50vw;
    height:30px;
  `}
  ${breakpoint('xl')`
    width:42vw;
    height:30px;
  `}
 
`*/