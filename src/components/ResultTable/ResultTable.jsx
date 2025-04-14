import React from "react";

const ResultTable = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Marks Table</h1>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-black font-bold border border-gray-400 px-2 py-1">
              Student ID
            </th>
            <th className="text-black font-bold border border-gray-400 px-2 py-1">
              Name
            </th>
            <th className="text-black font-bold border border-gray-400 px-2 py-1">
              Math
            </th>
            <th className="text-black font-bold border border-gray-400 px-2 py-1">
              Physics
            </th>
            <th className="text-black font-bold border border-gray-400 px-2 py-1">
              Chemistry
            </th>
            <th className="text-black font-bold border border-gray-400 px-2 py-1">
              Biology
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.student_id} className="text-center">
              <td className="border border-gray-400 px-2 py-1">
                {student.student_id}
              </td>
              <td className="border border-gray-400 px-2 py-1">
                {student.name}
              </td>
              <td className="border border-gray-400 px-2 py-1">
                {student.math}
              </td>
              <td className="border border-gray-400 px-2 py-1">
                {student.physics}
              </td>
              <td className="border border-gray-400 px-2 py-1">
                {student.chemistry}
              </td>
              <td className="border border-gray-400 px-2 py-1">
                {student.biology}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
