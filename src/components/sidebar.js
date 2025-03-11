//   import { Switch } from "@/components/ui/switch";
import NavItem from "./nav-item"
  
  export default function Sidebar({ isDarkMode, toggleDarkMode }) {
    return (
      <div className="w-60 bg-white dark:bg-gray-800 border-r border-[#e7e8ea] dark:border-gray-700 flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold dark:text-white">Shoorah</h1>
        </div>
  
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-1">
          <NavItem
            icon="/asset/dashboard.svg"
            label="Dashboard"
          />
           <NavItem
            icon="/asset/surveys.svg"
            label="Surveys"
          />
           <NavItem
            icon="/asset/dashboard.svg"
            label="Peap"
          />
           <NavItem
            icon="/asset/call.svg"
            label="Instant Support" active
          />
            {/* <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem icon={<FileText size={20} />} label="Surveys" />
            <NavItem icon={<LayoutDashboard size={20} />} label="Peap" />
            <NavItem icon={<FileText size={20} className="text-[#4a57da]" />} label="Instant Support" active />
            <NavItem icon={<User size={20} />} label="Sub Admin" />
            <NavItem icon={<CheckSquare size={20} />} label="Approvals" />
            <NavItem icon={<Key size={20} />} label="Solutions" />
            <NavItem icon={<Briefcase size={20} />} label="My Company" />
            <NavItem icon={<Users size={20} />} label="Users" />
            <NavItem icon={<FileBarChart size={20} />} label="Report" /> */}
          </ul>
        </nav>
  
        <div className="mt-auto border-t border-[#e7e8ea] dark:border-gray-700">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              {/* {isDarkMode ? <Sun size={20} className="text-gray-300" /> : <Moon size={20} className="text-[#606060]" />} */}
              <span className="ml-3 text-sm font-medium dark:text-gray-300">Darkmode</span>
            </div>
            {/* <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} /> */}
          </div>
          <div className="px-4 py-3 flex items-center text-[#606060] dark:text-gray-400 hover:text-[#0b1d2e] dark:hover:text-white cursor-pointer">
            {/* <LogOut size={20} /> */}
            <span className="ml-3 text-sm font-medium">Logout</span>
          </div>
        </div>
      </div>
    )
  }
  
  