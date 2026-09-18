import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-wrapper">
        {children}
      </div>
    </div>
  );
}