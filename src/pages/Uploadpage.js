
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Uploadpage.css';

// export const Uploadpage = () => {
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//         }
//     };

//     const handleUpload = () => {
//         if (selectedFile) {
//             const formData = new FormData();
//             formData.append('audioFile', selectedFile);

//             axios.post('YOUR_UPLOAD_URL', formData)
//                 .then(response => {
//                     // Handle successful upload
//                     alert('File uploaded successfully using axios.');
//                 })
//                 .catch(error => {
//                     // Handle upload error
//                     console.error('Error:', error);
//                     alert('Upload failed using axios.');
//                 });
//         } else {
//             alert('Please select a file to upload.');
//         }
//     };

//     return (
//         <div className="upload-container">
//             <label className="choosefile">
//                 Choose File
//                 <input type="file" accept="audio/*" onChange={handleFileChange} className="file-input" />
//             </label>
//             {selectedFile && (
//                 <div className="selected-file">
//                     <p>Selected File: {selectedFile.name}</p>
//                     <audio controls className="audio-preview">
//                         <source src={URL.createObjectURL(selectedFile)} />
//                         Your browser does not support the audio element.
//                     </audio>
//                 </div>
//             )}
//             <button onClick={handleUpload} className="upload-button">Upload</button>
//         </div>
//     );
// };

// export default Uploadpage;


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import './Uploadpage.css';
import axios from 'axios';

const Uploadpage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);

        setUploading(true);
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                // Handle successful upload
                console.log('File uploaded successfully:', res);
                setSelectedFile(null);
            })
            .catch((error) => {
                // Handle upload error
                console.error('Error uploading file:', error);
            })
            .finally(() => {
                setUploading(false);
            });
    };

    return (
        <div className="file-card">
            
            <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                disabled={uploading}
                
            />
            <br />
            <br />
            {selectedFile && (
                <button onClick={handleUpload} disabled={uploading} className="upload-button" >
                    {uploading ? 'Uploading...' : 'Upload'}
                    <FontAwesomeIcon icon={faUpload} />
                </button>
            )}
        </div>
    );
};

export default Uploadpage;
