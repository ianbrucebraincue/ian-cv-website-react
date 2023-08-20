import { useState, useRef, useEffect } from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Navigation from '../components/navigation';
import Resume from '../resume/index';

import '../styles/cv.scss';

export default function CurriculumVitae () {
const [iframeHeight, setIFrameHeight] = useState("0px");
const [iframeLoaded, setIFrameLoaded] = useState(false);
const iframeRef = useRef();

useEffect(() => {
    // iframeRef.current?.addEventListener('load', () => setIFrameLoaded(true));

    // console.log(iframeRef.current.contentWindow.document.body.scrollWidth * (11/8.5));

    setIFrameHeight((iframeRef.current?.contentWindow.document.body.scrollWidth * (11/8.5)) + 105);

    // return () => {
    //     iframeRef.current?.removeEventListener('load', () => setIFrameLoaded(true));
    // };
}, [iframeRef.current])

// console.log(iframeLoaded);

// console.log(iframeRef);

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