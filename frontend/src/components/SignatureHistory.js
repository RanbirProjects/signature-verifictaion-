import React, { useState } from 'react';

function SignatureHistory() {
  // Sample history data
  const [history] = useState([
    {
      id: 1,
      type: 'Upload',
      filename: 'signature1.jpg',
      date: '2024-01-15 14:30:25',
      status: 'Success',
      size: '245 KB'
    },
    {
      id: 2,
      type: 'Verify',
      filename: 'signature2.jpg',
      date: '2024-01-15 14:35:12',
      status: 'Match',
      size: '198 KB'
    },
    {
      id: 3,
      type: 'Verify',
      filename: 'signature3.jpg',
      date: '2024-01-15 14:40:08',
      status: 'No Match',
      size: '312 KB'
    },
    {
      id: 4,
      type: 'Upload',
      filename: 'new_signature.png',
      date: '2024-01-15 15:20:45',
      status: 'Success',
      size: '156 KB'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success':
      case 'Match':
        return '#28a745';
      case 'No Match':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Success':
        return '✅';
      case 'Match':
        return '✅';
      case 'No Match':
        return '❌';
      default:
        return '⏳';
    }
  };

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <div>
          <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>
            📋 Signature History
          </h2>
          <p style={{ margin: '0', color: '#666', fontSize: '16px' }}>
            Track all your signature uploads and verifications
          </p>
        </div>
        <div style={{ 
          display: 'flex', 
          gap: '10px'
        }}>
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            📊 Export Data
          </button>
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            🗑️ Clear History
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          backgroundColor: '#e3f2fd',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📤</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1976d2' }}>
            {history.filter(h => h.type === 'Upload').length}
          </div>
          <div style={{ color: '#666' }}>Uploads</div>
        </div>
        <div style={{
          backgroundColor: '#e8f5e8',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔍</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e7d32' }}>
            {history.filter(h => h.type === 'Verify').length}
          </div>
          <div style={{ color: '#666' }}>Verifications</div>
        </div>
        <div style={{
          backgroundColor: '#fff3e0',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✅</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f57c00' }}>
            {history.filter(h => h.status === 'Match').length}
          </div>
          <div style={{ color: '#666' }}>Matches</div>
        </div>
        <div style={{
          backgroundColor: '#fce4ec',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>❌</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c2185b' }}>
            {history.filter(h => h.status === 'No Match').length}
          </div>
          <div style={{ color: '#666' }}>No Matches</div>
        </div>
      </div>

      {/* History Table */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#f8f9fa',
              borderBottom: '2px solid #dee2e6'
            }}>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Type</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Filename</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Date</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Status</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Size</th>
              <th style={{ padding: '15px', textAlign: 'center', fontWeight: '600' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id} style={{
                borderBottom: '1px solid #dee2e6',
                transition: 'background-color 0.2s'
              }}>
                <td style={{ padding: '15px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: item.type === 'Upload' ? '#e3f2fd' : '#e8f5e8',
                    color: item.type === 'Upload' ? '#1976d2' : '#2e7d32'
                  }}>
                    {item.type}
                  </span>
                </td>
                <td style={{ padding: '15px', fontWeight: '500' }}>{item.filename}</td>
                <td style={{ padding: '15px', color: '#666' }}>{item.date}</td>
                <td style={{ padding: '15px' }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    color: getStatusColor(item.status),
                    fontWeight: '500'
                  }}>
                    {getStatusIcon(item.status)} {item.status}
                  </span>
                </td>
                <td style={{ padding: '15px', color: '#666' }}>{item.size}</td>
                <td style={{ padding: '15px', textAlign: 'center' }}>
                  <button style={{
                    padding: '5px 10px',
                    backgroundColor: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    marginRight: '5px'
                  }}>
                    👁️ View
                  </button>
                  <button style={{
                    padding: '5px 10px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SignatureHistory; 