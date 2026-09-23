"use client";

const GoBackButton = () => {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-slate-300 transition duration-300 hover:border-pink-500/40 hover:bg-slate-800 hover:text-white cursor-pointer"
    >
      ← Go Back
    </button>
  );
};

export default GoBackButton;
