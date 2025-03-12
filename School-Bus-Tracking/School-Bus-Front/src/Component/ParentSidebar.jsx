// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./sidebar.css"; // Ensure this CSS file is properly styled for mobile view


// const Sidebar = ({ isMobileSidebarOpen, toggleMobileSidebar }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed((prev) => !prev);
//   };


// const removeMobileSidebar = () => {
//   // alert("Sidebar toggled!");


//   const sidebar = document.querySelector(".sidebar");
//   // if (sidebar) {
//   //     sidebar.style.display = (sidebar.style.display === "none" || sidebar.style.display === "block") ? "block" : "none";
//   // }

//   if (sidebar) {
//     if (!sidebar.classList.contains("hide-mobile-sidebar") && !sidebar.classList.contains("show-mobile-sidebar")) {
//         // Pehli baar show-mobile-sidebar apply karega
//         sidebar.classList.add("hide-mobile-sidebar");
//     } else {
//         // Agar already show hai, toh toggle karega
//         sidebar.classList.toggle("hide-mobile-sidebar");
//         sidebar.classList.toggle("show-mobile-sidebar");
//     }
// }

// };

// const ParentSidebar = () => {
//   return (
//     <div className="sidebar" data-background-color="dark">
//       <div className="sidebar-logo">
//         <div className="logo-header" data-background-color="dark">
//           <Link to="/" className="logo">
//             <img
//               src="assets/img/kaiadmin/logo_light.svg"
//               alt="navbar brand"
//               className="navbar-brand"
//               height="20"
//             />
//           </Link>
//           <div className="nav-toggle">
//             <button className="btn btn-toggle toggle-sidebar">
//               <i className="gg-menu-right"></i>
//             </button>
//             <button className="btn btn-toggle sidenav-toggler">
//               <i className="gg-menu-left"></i>
//             </button>
//           </div>
//           <button className="topbar-toggler more">
//             <i className="gg-more-vertical-alt"></i>
//           </button>
//         </div>
//       </div>
//       <div className="sidebar-wrapper scrollbar scrollbar-inner">
//         <div className="sidebar-content">

//         <span className="remove-mobilesidebar" onClick={removeMobileSidebar}><i className="fas fa-times"></i></span>

//           <ul className="nav nav-secondary">
//             <li className="nav-item active">
//               <Link to="/parent-dashboard">
//                 <i className="fas fa-home"></i>
//                 <p>Parent Dashboard</p>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to="/daily-status">
//                 <i className="fas fa-calendar-day"></i>
//                 <p>Daily Status</p>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to="/monthly-status">
//                 <i className="fas fa-calendar-alt"></i>
//                 <p>Monthly Status</p>
//               </Link>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParentSidebar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"; // Ensure CSS is properly styled for mobile view

const ParentSidebar = ({ isMobileSidebarOpen, toggleMobileSidebar }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const removeMobileSidebar = () => {
    // alert("Sidebar toggled!");


    const sidebar = document.querySelector(".sidebar");
    // if (sidebar) {
    //     sidebar.style.display = (sidebar.style.display === "none" || sidebar.style.display === "block") ? "block" : "none";
    // }

    if (sidebar) {
      if (!sidebar.classList.contains("hide-mobile-sidebar") && !sidebar.classList.contains("show-mobile-sidebar")) {
          // Pehli baar show-mobile-sidebar apply karega
          sidebar.classList.add("hide-mobile-sidebar");
      } else {
          // Agar already show hai, toh toggle karega
          sidebar.classList.toggle("hide-mobile-sidebar");
          sidebar.classList.toggle("show-mobile-sidebar");
      }
  }

};

  return (
    <div
      id="mobile-sidebar"
      className={`sidebar ${isCollapsed ? "collapsed" : ""} ${isMobileSidebarOpen ? "mobile-open" : ""}`}
      data-background-color="dark"
    >
      <div className="sidebar-logo">
        {/* Logo Header */}
        <div className="logo-header" data-background-color="dark">
          {!isCollapsed ? (
            <Link to="/" className="logo d-flex align-items-center">
              <img
                src="assets/img/EzioQuiz.png"
                alt="navbar brand"
                className="navbar-brand"
                height="20"
              />
              <span className="ms-2 text-white fw-bold">Ezio Infotech</span>
            </Link>
          ) : (
            <div className="collapsed-header">
              <i
                className="gg-more-vertical-alt three-dot-icon"
                onClick={toggleSidebar}
                style={{ cursor: "pointer", position: "relative", left: "18px" }}
              ></i>
            </div>
          )}

          {/* Sidebar Toggle Button */}
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar" onClick={toggleSidebar}>
              {isCollapsed ? <i className="gg-menu-left"></i> : <i className="gg-menu-right"></i>}
            </button>
          </div>

          {/* Mobile Sidebar Close Button */}
          <button className="btn btn-toggle close-mobile-sidebar" onClick={toggleMobileSidebar}>
            {/* <i className="fas fa-times"></i> */}
          </button>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <span className="remove-mobilesidebar" onClick={removeMobileSidebar}><i className="fas fa-times"></i></span>

          <ul className="nav nav-secondary">
            <li className="nav-item active">
              <Link to="/parent-dashboard">
                <i className="fas fa-home"></i>
                <p>Parent Dashboard</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/daily-status">
                <i className="fas fa-calendar-day"></i>
                <p>Daily Status</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/monthly-status">
                <i className="fas fa-calendar-alt"></i>
                <p>Monthly Status</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParentSidebar;
