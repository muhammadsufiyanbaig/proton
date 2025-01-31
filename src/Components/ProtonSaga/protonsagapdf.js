import React, { Component } from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';
import sagaBroucher from "./sagaBroucher.pdf"
class Sagapdf extends Component {
    
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }
 
  render() {
    return (
      <div style={{marginTop:"10%"}}>
          
        <Document
        // file={sagaBroucher}
        file="/example.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page
            pageNumber={this.state.pageNumber}
          />
        </Document>
        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
      </div>
    );
  }
}

export default Sagapdf