import React, { useState } from 'react';

const UserList = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Viewer' },
    { id: 4, name: 'Anna Taylor', email: 'anna.taylor@example.com', role: 'Admin' },
    { id: 5, name: 'David Brown', email: 'david.brown@example.com', role: 'Editor' },
    { id: 6, name: 'Maria Garcia', email: 'maria.garcia@example.com', role: 'Viewer' },
    { id: 7, name: 'Chris Lee', email: 'chris.lee@example.com', role: 'Admin' },
    { id: 8, name: 'Sophia Johnson', email: 'sophia.johnson@example.com', role: 'Editor' },
    { id: 9, name: 'Liam Martinez', email: 'liam.martinez@example.com', role: 'Viewer' },
    { id: 10, name: 'Emily White', email: 'emily.white@example.com', role: 'Admin' },
    { id: 11, name: 'David Brown', email: 'david.brown@example.com', role: 'Editor' },
    { id: 12, name: 'Maria Garcia', email: 'maria.garcia@example.com', role: 'Viewer' },
    { id: 13, name: 'Chris Lee', email: 'chris.lee@example.com', role: 'Admin' },
    { id: 14, name: 'Sophia Johnson', email: 'sophia.johnson@example.com', role: 'Editor' },
    { id: 15, name: 'Liam Martinez', email: 'liam.martinez@example.com', role: 'Viewer' },
    { id: 16, name: 'Emily White', email: 'emily.white@example.com', role: 'Admin' },
  ];

  const rowsPerPage = 5; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the current rows to display
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-400 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Role</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {currentRows.map((item, index) => (
            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{item.id}</td>
              <td className="py-3 px-6 text-left">{item.name}</td>
              <td className="py-3 px-6 text-left">{item.email}</td>
              <td className="py-3 px-6 text-left">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border-blue-500'
            } hover:bg-blue-500 hover:text-white`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
