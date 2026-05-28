"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Flame, Timer, HeartPulse, Dumbbell } from "lucide-react";

export default function FitnessTrackerWebsite() {
  const data = [
    { day: "Mon", calories: 400 },
    { day: "Tue", calories: 300 },
    { day: "Wed", calories: 500 },
    { day: "Thu", calories: 450 },
    { day: "Fri", calories: 600 },
    { day: "Sat", calories: 700 },
    { day: "Sun", calories: 650 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white p-6">

      {/* Background Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-500 rounded-full blur-[130px] opacity-40" />
      <div className="absolute top-[200px] right-[-120px] w-[380px] h-[380px] bg-blue-500 rounded-full blur-[150px] opacity-40" />
      <div className="absolute bottom-[-150px] left-[200px] w-[320px] h-[320px] bg-green-500 rounded-full blur-[150px] opacity-30" />

      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">Fitness Tracker</h1>
          <p className="text-gray-400 mt-2">Track your daily performance</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-gray-800/60 backdrop-blur p-6 rounded-2xl border border-gray-700">
            <Flame className="text-orange-500 mb-3" size={32} />
            <h2 className="text-lg text-gray-300">Calories</h2>
            <p className="text-4xl font-bold">540</p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur p-6 rounded-2xl border border-gray-700">
            <Timer className="text-blue-500 mb-3" size={32} />
            <h2 className="text-lg text-gray-300">Workout Time</h2>
            <p className="text-4xl font-bold">1h 20m</p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur p-6 rounded-2xl border border-gray-700">
            <HeartPulse className="text-red-500 mb-3" size={32} />
            <h2 className="text-lg text-gray-300">Heart Rate</h2>
            <p className="text-4xl font-bold">124 BPM</p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur p-6 rounded-2xl border border-gray-700">
            <Dumbbell className="text-green-500 mb-3" size={32} />
            <h2 className="text-lg text-gray-300">Exercises</h2>
            <p className="text-4xl font-bold">3</p>
          </div>

        </div>

        {/* Progress */}
        <div className="mt-10 bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Daily Progress</h2>

          <p className="text-gray-300">Steps</p>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
            <div className="bg-green-500 h-3 rounded-full w-[70%]" />
          </div>

          <p className="text-gray-300">Calories Goal</p>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
            <div className="bg-orange-500 h-3 rounded-full w-[60%]" />
          </div>

          <p className="text-gray-300">Workout Completion</p>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div className="bg-blue-500 h-3 rounded-full w-[80%]" />
          </div>
        </div>

        {/* Chart */}
        <div className="mt-10 bg-gray-800/60 border border-gray-700 rounded-2xl p-6 h-[350px]">
          <h2 className="text-2xl font-bold mb-4">Weekly Calories Burned</h2>

          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="day" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="calories"
                  stroke="#22c55e"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
