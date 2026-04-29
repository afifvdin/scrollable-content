import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

const routes = [
  { path: "/vh", unit: "vh", minHeightClass: "min-h-[100vh]" },
  { path: "/lvh", unit: "lvh", minHeightClass: "min-h-[100lvh]" },
  { path: "/dvh", unit: "dvh", minHeightClass: "min-h-[100dvh]" },
  { path: "/svh", unit: "svh", minHeightClass: "min-h-[100svh]" },
] as const;

type Route = (typeof routes)[number];

function ViewportRoute({ route }: { route: Route }) {
  const containerClassName = `relative font-sans bg-green-500 ${route.minHeightClass}`;

  return (
    <div className={containerClassName}>
      {containerClassName}
      <div className="sticky top-0 bg-red-500 p-8 text-center">
        <nav className="mb-4 flex flex-wrap justify-center gap-3">
          {routes.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) =>
                isActive ? "font-bold underline" : "font-medium"
              }
              to={item.path}
            >
              {item.unit}
            </NavLink>
          ))}
        </nav>
        sticky top-0 bg-red-500 p-8 text-center
      </div>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 50 }).map((_, index) => (
          <p key={index} className="w-full bg-blue-500 text-center p-16">
            {index + 1} Paragraph
          </p>
        ))}
      </div>
      <div className="fixed bottom-0 w-full bg-red-500 p-8 text-center">
        fixed bottom-0 w-full bg-red-500 p-8 text-center
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<ViewportRoute route={route} />}
          />
        ))}
        <Route path="/" element={<Navigate to="/vh" replace />} />
        <Route path="*" element={<Navigate to="/vh" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
