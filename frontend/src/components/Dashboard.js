import React, { useState } from 'react';
import UploadSignature from './UploadSignature';
import VerifySignature from './VerifySignature';
import SignatureHistory from './SignatureHistory';
import Settings from './Settings';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('upload');
  
  // Sample user data - no authentication required
  const userData = {
    id: "demo_user_123",
    username: "Demo User",
    email: "demo@signature.com"
  };

  const tabs = [
    { id: 'upload', name: '📤 Upload', component: <UploadSignature /> },
    { id: 'verify', name: '🔍 Verify', component: <VerifySignature /> },
    { id: 'history', name: '📋 History', component: <SignatureHistory /> },
    { id: 'settings', name: '⚙️ Settings', component: <Settings /> }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px 0',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ margin: '0', fontSize: '2.5rem', fontWeight: '300' }}>
              ✍️ Signature Verification System
            </h1>
            <p style={{ margin: '5px 0 0 0', opacity: '0.9', fontSize: '1.1rem' }}>
              Welcome, {userData.username} • {userData.email}
            </p>
          </div>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{ 
              padding: '8px 16px', 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              borderRadius: '20px',
              fontSize: '14px',
              backdropFilter: 'blur(10px)'
            }}>
              🚀 Demo Mode
            </div>
            <div style={{ 
              padding: '8px 16px', 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              borderRadius: '20px',
              fontSize: '14px',
              backdropFilter: 'blur(10px)'
            }}>
              User ID: {userData.id}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid #e9ecef',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          display: 'flex',
          gap: '5px'
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '15px 25px',
                border: 'none',
                backgroundColor: activeTab === tab.id ? '#667eea' : 'transparent',
                color: activeTab === tab.id ? 'white' : '#6c757d',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
                borderRadius: '8px 8px 0 0',
                transition: 'all 0.3s ease',
                borderBottom: activeTab === tab.id ? '3px solid #667eea' : '3px solid transparent'
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '30px 20px'
      }}>
        <div style={{ 
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          minHeight: '500px'
        }}>
          {tabs.find(tab => tab.id === activeTab)?.component}
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        backgroundColor: '#343a40',
        color: 'white',
        padding: '30px 0',
        marginTop: '50px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ margin: '0 0 10px 0', color: '#667eea' }}>
                ✨ Signature Verification System
              </h3>
              <p style={{ margin: '0', opacity: '0.8' }}>
                Advanced signature verification using modern technology
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#667eea' }}>
                🎯 Made by Ranbir Singh
              </h4>
              <p style={{ margin: '0', opacity: '0.8', fontSize: '14px' }}>
                Full Stack Developer • MERN Stack Expert
              </p>
            </div>
          </div>
          <div style={{ 
            marginTop: '20px', 
            paddingTop: '20px', 
            borderTop: '1px solid #495057',
            opacity: '0.6',
            fontSize: '14px'
          }}>
            © 2024 Signature Verification System. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 