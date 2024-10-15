"use client";

import { FormEvent, useState } from "react";

const Page = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/analyze/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResult(`Sentiment: ${data.sentiment}, Polarity: ${data.polarity}`);
    } catch (error) {
      console.error("Error analyzing text:", error);
      setResult("Error occurred while analyzing text.");
    }
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
            value={text}
            placeholder="Wpisz tekst, który chcesz przeanalizować..."
            rows={6}
            className="w-full p-4 text-lg border rounded-md"
            onChange={(e) => setText(e.target.value)}
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
