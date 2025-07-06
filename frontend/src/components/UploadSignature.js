import React, { useState } from 'react';
import axios from 'axios';

function UploadSignature() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setMessage('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
      setMessage('');
    } else {
      setMessage('Please select an image file');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first');
      return;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setMessage('File size must be less than 5MB');
      return;
    }

    const formData = new FormData();
    formData.append('signature', file);

    // Simulate upload progress
    setUploadProgress(0);
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    try {
      const res = await axios.post('http://localhost:5001/api/signature/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadProgress(100);
      setMessage(res.data.message);
      setTimeout(() => setUploadProgress(0), 2000);
    } catch (err) {
      setUploadProgress(0);
      setMessage('Upload failed');
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>
          📤 Upload Signature
        </h2>
        <p style={{ margin: '0', color: '#666', fontSize: '16px' }}>
          Upload your signature image to store it for verification
        </p>
      </div>

      {/* File Upload Area */}
      <div
        style={{
          border: isDragging ? '3px dashed #667eea' : '3px dashed #ddd',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          backgroundColor: isDragging ? '#f8f9ff' : '#f8f9fa',
          transition: 'all 0.3s ease',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input').click()}
      >
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
          {file ? '📄' : '📁'}
        </div>
        <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
          {file ? file.name : 'Drop your signature image here'}
        </h3>
        <p style={{ margin: '0', color: '#666' }}>
          {file ? `Size: ${formatFileSize(file.size)}` : 'or click to browse files'}
        </p>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>

      {/* File Info */}
      {file && (
        <div style={{
          padding: '15px',
          backgroundColor: '#e8f5e8',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem' }}>📄</span>
            <div>
              <div style={{ fontWeight: '500' }}>{file.name}</div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                {formatFileSize(file.size)} • {file.type}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Progress */}
      {uploadProgress > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Uploading...</span>
            <span style={{ fontSize: '14px', color: '#666' }}>{uploadProgress}%</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#e9ecef',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${uploadProgress}%`,
              height: '100%',
              backgroundColor: '#667eea',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={!file || uploadProgress > 0}
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: file && uploadProgress === 0 ? '#667eea' : '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: file && uploadProgress === 0 ? 'pointer' : 'not-allowed',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          marginBottom: '20px'
        }}
      >
        {uploadProgress > 0 ? '⏳ Uploading...' : '🚀 Upload Signature'}
      </button>

      {/* Message */}
      {message && (
        <div style={{
          padding: '15px',
          backgroundColor: message.includes('failed') ? '#f8d7da' : '#d4edda',
          color: message.includes('failed') ? '#721c24' : '#155724',
          borderRadius: '8px',
          border: `1px solid ${message.includes('failed') ? '#f5c6cb' : '#c3e6cb'}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem' }}>
              {message.includes('failed') ? '❌' : '✅'}
            </span>
            <span style={{ fontWeight: '500' }}>{message}</span>
          </div>
        </div>
      )}

      {/* Tips */}
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#fff3cd',
        borderRadius: '8px',
        border: '1px solid #ffeaa7'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#856404' }}>💡 Tips for Best Results:</h4>
        <ul style={{ margin: '0', paddingLeft: '20px', color: '#856404' }}>
          <li>Use high-quality images (JPG, PNG, GIF)</li>
          <li>Ensure good lighting and contrast</li>
          <li>Keep file size under 5MB</li>
          <li>Use clear, readable signatures</li>
        </ul>
      </div>
    </div>
  );
}

export default UploadSignature; 