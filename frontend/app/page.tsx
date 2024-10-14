"use client";

import { FormEvent, useState } from "react";

const Page = () => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Tekst do analizy:", inputText);
  };

  return (
    <div className="flex justify-center items-center w-dvw h-dvh">
      <div className="p-6 max-w-lg mx-auto w-1/2">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Analiza Sentymentu
        </h1>
        <form
          className="flex-col justify-center items-center flex"
          onSubmit={handleSubmit}
        >
          <textarea
            value={inputText}
            placeholder="Wpisz tekst, który chcesz przeanalizować..."
            rows={6}
            className="w-full p-4 text-lg border rounded-md"
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Przeanalizuj
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
