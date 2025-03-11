import { Bell } from "lucide-react"

export default function Header() {
  return (
    <header className=" dark:bg-gray-800 border-[#e7e8ea] dark:border-gray-700 p-6 flex justify-between items-start">
      <div>
        <h1 className="text-2xl font-semibold text-[#0b1d2e] dark:text-white">Instant Support</h1>
        <p className="mt-1 text-[#606060] dark:text-gray-400 max-w-xl">
          Expert support, right when it's needed most. Give your team the backing they deserve, with instant access to
          professionals who can help today.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-[#606060] dark:text-gray-400">
        <img
            src="/asset/bell.svg"
            alt="Notification Bell"
            width={20}
            height={20}
          />
        </button>
        <div className="flex items-center">
          <img
            src="/asset/profile.svg?height=40&width=40"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="font-medium text-[#0b1d2e] dark:text-white">Reuben Hale</p>
            <p className="text-sm text-[#606060] dark:text-gray-400">Sub Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}