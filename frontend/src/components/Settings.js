import React, { useState } from 'react';

function Settings() {
  const [settings, setSettings] = useState({
    autoSave: true,
    notifications: true,
    darkMode: false,
    language: 'English',
    verificationThreshold: 80,
    maxFileSize: 5
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>
          ⚙️ System Settings
        </h2>
        <p style={{ margin: '0', color: '#666', fontSize: '16px' }}>
          Configure your signature verification preferences
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* General Settings */}
        <div>
          <h3 style={{ color: '#333', marginBottom: '20px', borderBottom: '2px solid #667eea', paddingBottom: '10px' }}>
            🔧 General Settings
          </h3>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <div>
                <div style={{ fontWeight: '500', marginBottom: '5px' }}>Auto Save</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Automatically save uploaded signatures</div>
              </div>
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
                style={{ transform: 'scale(1.2)' }}
              />
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <div>
                <div style={{ fontWeight: '500', marginBottom: '5px' }}>Notifications</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Show verification result notifications</div>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                style={{ transform: 'scale(1.2)' }}
              />
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <div>
                <div style={{ fontWeight: '500', marginBottom: '5px' }}>Dark Mode</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Enable dark theme (coming soon)</div>
              </div>
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
                style={{ transform: 'scale(1.2)' }}
                disabled
              />
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', display: 'block' }}>
              <div style={{ fontWeight: '500', marginBottom: '10px' }}>Language</div>
              <select
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  fontSize: '14px'
                }}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </label>
          </div>
        </div>

        {/* Verification Settings */}
        <div>
          <h3 style={{ color: '#333', marginBottom: '20px', borderBottom: '2px solid #667eea', paddingBottom: '10px' }}>
            🔍 Verification Settings
          </h3>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', display: 'block' }}>
              <div style={{ fontWeight: '500', marginBottom: '10px' }}>
                Verification Threshold: {settings.verificationThreshold}%
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                Minimum similarity percentage for a match
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={settings.verificationThreshold}
                onChange={(e) => handleSettingChange('verificationThreshold', parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666', marginTop: '5px' }}>
                <span>50%</span>
                <span>100%</span>
              </div>
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', display: 'block' }}>
              <div style={{ fontWeight: '500', marginBottom: '10px' }}>
                Max File Size: {settings.maxFileSize} MB
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                Maximum allowed file size for uploads
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={settings.maxFileSize}
                onChange={(e) => handleSettingChange('maxFileSize', parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666', marginTop: '5px' }}>
                <span>1 MB</span>
                <span>10 MB</span>
              </div>
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: '#e8f5e8', borderRadius: '8px' }}>
              <div style={{ fontWeight: '500', marginBottom: '5px', color: '#2e7d32' }}>
                🎯 Supported Formats
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                JPG, PNG, GIF, BMP, TIFF
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ color: '#333', marginBottom: '20px', borderBottom: '2px solid #667eea', paddingBottom: '10px' }}>
          💻 System Information
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontWeight: '500', marginBottom: '10px' }}>🖥️ System</div>
            <div style={{ fontSize: '14px', color: '#666' }}>
              <div>OS: macOS 12.0</div>
              <div>Browser: Chrome 120.0</div>
              <div>Resolution: 1920x1080</div>
            </div>
          </div>
          
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontWeight: '500', marginBottom: '10px' }}>🌐 Network</div>
            <div style={{ fontSize: '14px', color: '#666' }}>
              <div>Status: Connected</div>
              <div>Latency: 45ms</div>
              <div>Server: localhost:5001</div>
            </div>
          </div>
          
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontWeight: '500', marginBottom: '10px' }}>📊 Performance</div>
            <div style={{ fontSize: '14px', color: '#666' }}>
              <div>CPU Usage: 12%</div>
              <div>Memory: 2.1 GB</div>
              <div>Storage: 45 GB free</div>
            </div>
          </div>
          
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontWeight: '500', marginBottom: '10px' }}>🔧 Version</div>
            <div style={{ fontSize: '14px', color: '#666' }}>
              <div>App: v2.1.0</div>
              <div>API: v1.0.0</div>
              <div>Last Update: 2024-01-15</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        display: 'flex',
        gap: '15px',
        justifyContent: 'center'
      }}>
        <button style={{
          padding: '12px 24px',
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          💾 Save Settings
        </button>
        <button style={{
          padding: '12px 24px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          🔄 Reset to Default
        </button>
        <button style={{
          padding: '12px 24px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          🗑️ Clear All Data
        </button>
      </div>
    </div>
  );
}

export default Settings; 