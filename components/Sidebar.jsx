import {
  LayoutDashboard,
  Target,
  BarChart3,
  User,
  Settings
} from "lucide-react";

export default function Sidebar({
  page,
  setPage,
}) {
  const menu = [
    ["dashboard", LayoutDashboard],
    ["goals", Target],
    ["analytics", BarChart3],
    ["profile", User],
    ["settings", Settings],
  ];

  return (
    <div className="sidebar">
      <h1>FitTrack Pro</h1>

      {menu.map(([name, Icon]) => (
        <button
          key={name}
          onClick={() => setPage(name)}
          className={
            page === name
              ? "active-menu"
              : ""
          }
        >
          <Icon size={20} />
          {name}
        </button>
      ))}
    </div>
  );
}