import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Audio.css";
const Audio = () => {
  const [audioName, setAudioName] = useState("");
  const [uploadDateTime, setUploadDateTime] = useState("");
  const [transcriptData, setTranscriptData] = useState("");
  const [summaryData, setSummaryData] = useState("");
  const [momData, setMomData] = useState("");
  const [viewData, setViewData] = useState("");

  useEffect(() => {
    // Fetch audio details on component mount
    fetchAudioDetails();
  }, []);

  const fetchAudioDetails = async () => {
    try {
      const response = await axios.get("http://localhost:3001/audio");
      setAudioName(response.data.name);
      setUploadDateTime(response.data.uploadDateTime);
    } catch (error) {
      console.error("Error fetching audio details:", error);
    }
  };

  const handleEditName = (event) => {
    setAudioName(event.target.value);
  };

  const handleSaveName = async () => {
    try {
        await axios.put('http://localhost:3001/audio', { name: audioName });
        console.log('Audio name saved successfully.');
    } catch (error) {
        console.error('Error saving audio name:', error);
    }
};

  const handlePlay = () => {
    // Implement play functionality
  };

  const handleRunTranscript = async () => {
    try {
      const response = await axios.get("http://localhost:3001/transcript");
      setTranscriptData(response.data);
    } catch (error) {
      console.error("Error fetching transcript data:", error);
    }
  };

  const handleRunSummary = async () => {
    try {
      const response = await axios.get("http://localhost:3001/summary");
      setSummaryData(response.data);
    } catch (error) {
      console.error("Error fetching summary data:", error);
    }
  };

  const handleRunMOM = async () => {
    try {
      const response = await axios.get("http://localhost:3001/mom");
      setMomData(response.data);
    } catch (error) {
      console.error("Error fetching MOM data:", error);
    }
  };

  const handleView = async () => {
    try {
      // Fetch all data (transcript, summary, mom) at once
      const [transcriptResponse, summaryResponse, momResponse] =
        await Promise.all([
          axios.get("http://localhost:3001/transcript"),
          axios.get("http://localhost:3001/summary"),
          axios.get("http://localhost:3001/mom"),
        ]);

      setTranscriptData(transcriptResponse.data);
      setSummaryData(summaryResponse.data);
      setMomData(momResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="audio-container">
      <div className="audio-details">
        <label>Audio Name:</label>
        <input type="text" value={audioName} onChange={handleEditName} />
       
        <button onClick={handleSaveName} className="save-button">Save</button>
      </div>
      <div className="upload-date">
        <p>Upload Date and Time: {uploadDateTime}</p>
      </div>
      <div className="audio-controls">
        <button onClick={handlePlay}>Play</button>
        <br />
        <br />
        <button onClick={handleRunTranscript}>Transcript</button>
        <button onClick={handleRunSummary}>Summary</button>
        <button onClick={handleRunMOM}>MOM</button>
      </div>

      <div className="view-button">
        <button onClick={handleView}>View</button>
      </div>
      <div className="audio-data">
        {/* Display fetched data */}
        {transcriptData && <div>Transcript: {transcriptData}</div>}
        {summaryData && <div>Summary: {summaryData}</div>}
        {momData && <div>MOM: {momData}</div>}
      </div>
    </div>
  );
};

export default Audio;
