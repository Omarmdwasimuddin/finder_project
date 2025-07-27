"use client";

import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

const donationData = [
  { name: "Jan", donations: 30 },
  { name: "Feb", donations: 45 },
  { name: "Mar", donations: 80 },
  { name: "Apr", donations: 60 },
];

const bloodGroupData = [
  { name: "A+", value: 400 },
  { name: "B+", value: 300 },
  { name: "O+", value: 300 },
  { name: "AB+", value: 200 },
];

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

export default function ImpactInNumbers() {
  return (
    <div className="bg-red-100 py-12 px-4 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-10">
        {/* Donations Bar Chart */}
        <div className="bg-red-50 rounded-xl shadow-md p-4">
          <h3 className="text-xl font-semibold mb-4">Monthly Donations</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={donationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="donations" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Blood Group Pie Chart */}
        <div className="bg-red-50 rounded-xl shadow-md p-4">
          <h3 className="text-xl font-semibold mb-4">Blood Group Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={bloodGroupData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {bloodGroupData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
