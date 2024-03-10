import {createContext} from 'react'

const MyContext = createContext("");

const DownloadCv = () => {
    const pdfUrl = "Kiran-Dhoke-Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Kiran Dhoke Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default MyContext ;