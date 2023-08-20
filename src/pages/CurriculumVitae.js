import { useState, useRef, useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Navigation from '../components/navigation';
import Resume from '../resume/index';

import '../styles/cv.scss';

export default function CurriculumVitae () {
const [iframeHeight, setIFrameHeight] = useState("0px");
const iframeRef = useRef();

useEffect(() => {

    setIFrameHeight((iframeRef.current?.contentWindow.document.body.scrollWidth * (11/8.5)) + 105);

}, [])

    return (
        <main role="main" id="wrap" className="main">  
           <Navigation />  
           <div className="pdf-resume-iframe-wrap" id="ian_bruce_cv">
            <PDFViewer innerRef={iframeRef} height={iframeHeight}>
                    <Resume/>
            </PDFViewer>
           </div>
        </main>
    )
}