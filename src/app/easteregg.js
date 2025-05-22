import React from "react";

function EasterEgg({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm text-black">
          <h2 className="text-xl font-bold mb-4">🎉 wow... you found the easter egg 🎉</h2>
          <p className="mb-6">here&apos;s a cookie 🍪</p>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-500 via-red-500 to-green-500 hover:bg-gradient-to-l text-black font-semibold py-2 px-4 rounded"
          >
            collect cookie
          </button>
        </div>
      </div>
    );
  }

export default EasterEgg;