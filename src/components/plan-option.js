"use client"

export default function PlanOption({ title, description, price, selected, onChange }) {
  return (
    <div
      className={`border rounded-md p-4 flex items-start cursor-pointer transition-colors ${
        selected
          ? "border-[#4a57da] dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20"
          : "border-[#e7e8ea] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
      }`}
      onClick={onChange}
    >
      <div className="mr-3 mt-1">
        <div
          className={`h-5 w-5 border rounded-full flex items-center justify-center ${
            selected ? "border-[#4a57da] dark:border-blue-500" : "border-[#d0d5dd] dark:border-gray-600"
          }`}
        >
          {selected && <div className="h-2.5 w-2.5 rounded-full bg-[#4a57da] dark:bg-blue-500"></div>}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-[#0b1d2e] dark:text-white">{title}</h4>
        <p className="text-sm text-[#606060] dark:text-gray-400 mt-1">{description}</p>
      </div>
      <div className="text-[#0b1d2e] dark:text-white font-medium">{price}</div>
    </div>
  )
}

