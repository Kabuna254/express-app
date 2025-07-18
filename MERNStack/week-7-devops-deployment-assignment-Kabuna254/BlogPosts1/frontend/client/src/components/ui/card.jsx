const Card = ({ children, className = "" }) => (
  <div
    className={`bg-gray-950 border border-gray-800 rounded-xl shadow-sm transition-shadow hover:shadow-lg p-8 md:p-12 my-8 mx-auto max-w-screen-lg ${className}`}
    style={{
      boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
      transition: "box-shadow 0.2s"
    }}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-4 py-6 ${className}`}>
    {children}
  </div>
);

export { Card, CardContent };