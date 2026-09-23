"use client";

import { useState } from "react";

/* const Counter = () => {
  // console.log("Counter page rendered");
  // Without "use client", is it -  Server  Counter page rendered
  // With "use client", is it - Counter page rendered

  const [count, setCount] = useState(0);

  const handleClick = () => {
    // console.log("Button is clicked!");

    setCount(count + 1);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">
        Counter: {count}{" "}
        {`${count > 1 ? "Clicks" : count === 1 ? "Click" : ""}`}
      </h2>

      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded cursor-grab"
      >
        Increase!
      </button>
    </div>
  );
};

export default Counter; */

const Counter = () => {
  // Client Component
  // "use client" is required because this component uses:
  // - useState
  // - onClick

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const clickLabel = count > 1 ? "Clicks" : count === 1 ? "Click" : "";

  return (
    <section className="relative overflow-hidden rounded-2xl border border-pink-500/20 bg-slate-900 p-6 shadow-xl shadow-pink-950/10">
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-pink-500/50 blur-3xl" />

      <div className="relative">
        {/* Client badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-pink-400" />
          Client Component
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-slate-500">Interactive state</p>

            <div className="mt-2 flex items-baseline gap-3">
              <span className="bg-linear-to-r from-pink-400 to-violet-400 bg-clip-text text-5xl font-bold text-transparent">
                {count}
              </span>

              <span className="text-lg text-slate-400">{clickLabel}</span>
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              This counter needs the browser because its state changes when the
              button is clicked.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClick}
            className="rounded-xl bg-linear-to-r from-pink-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-950/20 transition duration-300 hover:from-pink-500 hover:to-violet-500 hover:shadow-pink-500/20 active:scale-95 cursor-grab"
          >
            Increase Count
          </button>
        </div>

        {/* Explanation */}
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <p className="text-sm leading-6 text-slate-400">
            <code className="text-pink-400">useState()</code> stores the counter
            value, while <code className="text-pink-400">onClick</code> responds
            to the user's interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
