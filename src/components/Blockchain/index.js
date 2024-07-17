import React, { useEffect, useState } from 'react';

const Blockchain = () => {
  const servers = [
    "https://landchainguard.my.id/1",
    "https://landchainguard.my.id/2",
    "https://landchainguard.my.id/3",
    "https://landchainguard.my.id/4",
    "https://landchainguard.my.id/5",
    "https://landchainguard.my.id/6",
    "https://landchainguard.my.id/7",
    "https://landchainguard.my.id/8",
    "https://landchainguard.my.id/9",
    "https://landchainguard.my.id/10",
  ];

  const [nodes, setNodes] = useState(Array(servers.length).fill({ ip: '', data: '', error: '', rawData: {} }));

  useEffect(() => {
    servers.forEach((url, index) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const dataArray = data; // Assuming data is already an array of objects

          let dataText = '';
          dataArray.forEach(item => {
            dataText += `Data: ${item.Data}\n`;
            dataText += `Hash: ${item.Hash}\n`;
            dataText += `Index: ${item.Index}\n`;
            dataText += `Nonce: ${item.Nonce}\n`;
            dataText += `PreviousHash: ${item.PreviousHash}\n`;
            dataText += `Timestamp: ${item.Timestamp}\n\n`;
          });

          setNodes(prevNodes => {
            const newNodes = [...prevNodes];
            newNodes[index] = { ip: `Node #${index + 1}`, data: dataText.trim(), error: '', rawData: dataArray };
            return newNodes;
          });
        })
        .catch(error => {
          setNodes(prevNodes => {
            const newNodes = [...prevNodes];
            newNodes[index] = { ip: 'Error', data: `Error fetching data: ${error.message}`, error: error.message, rawData: {} };
            return newNodes;
          });
          console.error('Error fetching data from', url, error);
        });
    });
  }, []);

  return (
    <div className="mt-5">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold">Server Blockchain</h1>
      </div>
      <div id="blockchain" className="grid grid-cols-3 gap-4 p-20 mx-20 my-10" style={{ maxHeight: '600px', overflowY: 'auto', boxShadow: '0 1px 20px rgba(0,0,0,0.25)' }}>
        {nodes.map((node, index) => (
          <div key={index} className="node bg-white border-2 border-blue-500 rounded-lg p-5 shadow-md w-full overflow-auto">
            <h2 className="text-center text-xl font-bold mb-4" style={{ color: 'blue' }}>{node.ip}</h2>
            <label className="block mt-2 font-bold">Data:</label>
            <div className="table-container" style={{ maxHeight: '200px', overflowY: 'auto', padding: '0 16px' }}>
              <table className="w-full border-collapse border border-gray-300">
                <tbody>
                  {node.data.split('\n\n').map((block, idx) => (
                    <React.Fragment key={idx}>
                      {block.split('\n').map((detail, detailIdx) => (
                        <tr key={detailIdx}>
                          <td className="border border-gray-300 p-2 font-bold text-xs">{detail.split(': ')[0]}</td>
                          <td className="border border-gray-300 p-2 text-xs">{detail.split(': ')[1]}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-medium text-gray-900">Raw JSON Data:</h4>
              <pre className="text-sm text-gray-800 bg-gray-100 rounded p-2 overflow-auto" style={{ maxHeight: '150px' }}>
                <code>{JSON.stringify(node.rawData, null, 2)}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blockchain;
