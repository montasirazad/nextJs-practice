const DashboardLayout = ({ children }) => {
  return (
    <>
      <div>
        <ul className="flex gap-5">
          <li>Analytic</li>
          <li>Setting</li>
        </ul>
      </div>
      {children}
    </>
  );
};

export default DashboardLayout;
