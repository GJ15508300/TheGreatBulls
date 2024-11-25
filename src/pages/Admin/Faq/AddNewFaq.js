import React, { useState } from "react";

const AddNewFaq = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [faqList, setFaqList] = useState([]);

  const handleAddFaq = () => {
    if (question.trim() && answer.trim()) {
      const newFaq = { question, answer };
      //   setFaqList([...faqList, newFaq]);
      console.log("newFaq", newFaq);
      setQuestion("");
      setAnswer("");
    } else {
      alert("Please fill out both fields!");
    }
  };

  return (
    <div className="mx-auto p-6 max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <h3 className="text-lg font-semibold mb-4 text-center">Add New</h3>
      <div className="space-y-4">
        {/* Question Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the question"
          />
        </div>

        {/* Answer Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Answer:</label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the answer"
            rows="4"
          />
        </div>

        {/* Add FAQ Button */}
        <button
          onClick={handleAddFaq}
          className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
        >
          Add FAQ
        </button>
      </div>
    </div>
  );
};

export default AddNewFaq;
