import React from "react";
import { Printer, Download, DollarSign, Bell, FileText, Repeat, ClipboardList } from "lucide-react";

export default function PaymentWindow() {
  const handleClick = (action) => {
    alert(`You clicked on ${action}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Payment Window</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button icon={<DollarSign size={18} />} text="Record Payment" onClick={() => handleClick("Record Payment")} color="bg-blue-600" />
          <Button icon={<Printer size={18} />} text="Print" onClick={() => handleClick("Print")} color="bg-gray-600" />
          <Button icon={<Download size={18} />} text="Download" onClick={() => handleClick("Download")} color="bg-green-600" />
          <Button icon={<FileText size={18} />} text="Bill" onClick={() => handleClick("Bill")} color="bg-yellow-600" />
          <Button icon={<Bell size={18} />} text="Send Reminder" onClick={() => handleClick("Send Payment Reminder")} color="bg-purple-600" />
          <Button icon={<Repeat size={18} />} text="Change Template" onClick={() => handleClick("Change Template")} color="bg-red-600" />
          <Button icon={<ClipboardList size={18} />} text="Invoice Logs" onClick={() => handleClick("Invoice Logs")} color="bg-indigo-600" fullWidth />
        </div>
      </div>
    </div>
  );
}

function Button({ icon, text, onClick, color, fullWidth }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-3 text-white font-medium rounded-lg shadow-md hover:brightness-90 transition ${color} ${fullWidth ? "col-span-2 w-full" : "w-full"}`}
      onClick={onClick}
    >
      {icon} {text}
    </button>
  );
}
