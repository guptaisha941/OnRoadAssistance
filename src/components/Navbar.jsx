import { NavLink, Router, Route } from "react-router-dom";
// import Login from "./components/Login";'
import login from "./Login";
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default function FormNavbar() {
    return (
      <nav className="bg-gray-800">
        <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-900 text-white px-3 py-2 text-sm font-large">
                    DASHBOARD
                  </a>
                  
                </div>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-900 text-white px-3 py-2 text-sm font-large">
                    DASHBOARD1
                  </a>
                  
                </div>

            </div>
          </div>
        </div>
  
        
      </nav>
    );
  }
  
