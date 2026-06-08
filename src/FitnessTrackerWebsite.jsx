import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Target,
  BarChart3,
  User,
  Moon,
  Sun,
  Flame,
  HeartPulse,
  Timer,
  Footprints,
  Droplets,
  Dumbbell,
} from "lucide-react";

export default function FitnessTrackerWebsite() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(true);

  const cardStyle = darkMode
    ? "bg-gray-900/70 border-gray-700 text-white"
    : "bg-white border-gray-300 text-black";

  const pageStyle = darkMode
    ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
    : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black";

  const navItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "goals", icon: Target, label: "Goals" },
    { id: "progress", icon: BarChart3, label: "Progress" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className={`min-h-screen flex ${pageStyle}`}>
      {/* Sidebar */}
      <div
        className={`w-72 border-r ${
          darkMode ? "border-gray-700" : "border-gray-300"
        } p-6`}
      >
        <h1 className="text-3xl font-bold text-green-500 mb-10">
          FitTrack Pro
        </h1>

        <div className="space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeTab === item.id
                  ? "bg-green-500 text-white"
                  : "hover:bg-green-500/20"
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-12 flex items-center gap-3 bg-green-500 px-4 py-3 rounded-xl text-white"
        >
          {darkMode ? <Sun /> : <Moon />}
          Switch Theme
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 overflow-auto">
        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-5xl font-bold mb-8">Dashboard</h1>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                <StatCard
                  icon={<Flame className="text-orange-500" />}
                  title="Calories Burned"
                  value="540"
                  style={cardStyle}
                />

                <StatCard
                  icon={<Timer className="text-blue-500" />}
                  title="Workout Time"
                  value="1h 20m"
                  style={cardStyle}
                />

                <StatCard
                  icon={<HeartPulse className="text-red-500" />}
                  title="Heart Rate"
                  value="124 BPM"
                  style={cardStyle}
                />

                <StatCard
                  icon={<Footprints className="text-purple-500" />}
                  title="Steps"
                  value="8,432"
                  style={cardStyle}
                />

                <StatCard
                  icon={<Droplets className="text-cyan-500" />}
                  title="Water Intake"
                  value="2.8L"
                  style={cardStyle}
                />

                <StatCard
                  icon={<Dumbbell className="text-green-500" />}
                  title="Exercises"
                  value="5"
                  style={cardStyle}
                />
              </div>

              <div
                className={`mt-8 p-6 rounded-3xl border backdrop-blur-xl ${cardStyle}`}
              >
                <h2 className="text-2xl font-bold mb-5">
                  Daily Goal Completion
                </h2>

                <GoalBar title="Steps Goal" percent={84} />
                <GoalBar title="Calories Goal" percent={72} />
                <GoalBar title="Workout Goal" percent={91} />
              </div>
            </motion.div>
          )}

          {activeTab === "goals" && (
            <motion.div
              key="goals"
              initial={{ x: 60 }}
              animate={{ x: 0 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-5xl font-bold mb-8">Goals</h1>

              <div className="space-y-6">
                <GoalCard
                  title="10,000 Daily Steps"
                  percent={84}
                  style={cardStyle}
                />

                <GoalCard
                  title="700 Calories Burn"
                  percent={72}
                  style={cardStyle}
                />

                <GoalCard
                  title="3 Liters Water Intake"
                  percent={95}
                  style={cardStyle}
                />
              </div>
            </motion.div>
          )}

          {activeTab === "progress" && (
            <motion.div
              key="progress"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-5xl font-bold mb-8">Progress</h1>

              <div className="grid md:grid-cols-2 gap-6">
                <ProgressCard
                  title="Workout Consistency"
                  value="92%"
                  style={cardStyle}
                />

                <ProgressCard
                  title="Weekly Improvement"
                  value="+18%"
                  style={cardStyle}
                />

                <ProgressCard
                  title="Fitness Score"
                  value="95%"
                  style={cardStyle}
                />

                <ProgressCard
                  title="Goal Completion"
                  value="87%"
                  style={cardStyle}
                />
              </div>
            </motion.div>
          )}

          {activeTab === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1 className="text-5xl font-bold mb-8">Profile</h1>

              <div
                className={`max-w-xl p-8 rounded-3xl border backdrop-blur-xl ${cardStyle}`}
              >
                <div className="w-28 h-28 rounded-full bg-green-500 mb-6"></div>

                <h2 className="text-3xl font-bold">
                  Saksham Yadav
                </h2>

                <div className="space-y-3 mt-6 text-lg">
                  <p>Age: 22</p>
                  <p>Height: 185 cm</p>
                  <p>Weight: 80 kg</p>
                  <p>Fitness Score: 95%</p>
                  <p>Workout Streak: 18 Days</p>
                </div>

                <button className="mt-6 bg-green-500 px-6 py-3 rounded-xl text-white">
                  Edit Profile
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, style }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-3xl border backdrop-blur-xl ${style}`}
    >
      <div className="mb-3">{icon}</div>
      <h3 className="opacity-70">{title}</h3>
      <p className="text-4xl font-bold mt-2">{value}</p>
    </motion.div>
  );
}

function GoalBar({ title, percent }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span>{title}</span>
        <span>{percent}%</span>
      </div>

      <div className="bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1 }}
          className="bg-green-500 h-3 rounded-full"
        />
      </div>
    </div>
  );
}

function GoalCard({ title, percent, style }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-3xl border ${style}`}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <GoalBar title="Completion" percent={percent} />
    </motion.div>
  );
}

function ProgressCard({ title, value, style }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-8 rounded-3xl border backdrop-blur-xl ${style}`}
    >
      <h2 className="text-xl">{title}</h2>
      <p className="text-5xl font-bold mt-4 text-green-500">
        {value}
      </p>
    </motion.div>
  );
}