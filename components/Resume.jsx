import React from 'react';
import { Document, Page } from 'react-pdf';
import samplePDF from '/AryaZhao_Resume.pdf';

const Resume = () =>{
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
}

export default Resume;

