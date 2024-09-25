import React, { useState } from "react";
import "./Chatbot.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const Chatbot = ({ menuItems }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  // Function to handle chatbot interaction
  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... Please wait.");

    try {
      // Simulate API call to the Gemini model for content generation
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDTBMv50hqi0cJKJaxaxw9K99mCuGObwOw",
        method: "post",
        data: {
          contents: [{ parts: [{ text: `In the context of a coffee shop, ${question}` }] }],
        },
      });

      // Extract the generated answer from the response
      const answerText = response.data.candidates[0].content.parts[0].text;

      // Check if the answer is relevant to the coffee shop
      const keywords = [
        "coffee",
        "espresso",
        "latte",
        "menu",
        "cake",
        "order",
        "cappuccino",
        "mocha",
        "tea",
        "breakfast",
        "brunch",
        "dessert",
        "scone",
        "muffin",
        "smoothie",
        "beverage",
        "snack",
        "caffeine",
        "daily specials",
        "happy hour",
        "takeaway",
        "location",
        "opening hours",
        "reservations",
        "gift card",
        "loyalty program",
        "coffee beans",
        "brewing",
        "iced coffee",
        "seasonal drinks",
        "nutrition"
    ];
    
      const isRelevant = keywords.some((keyword) =>
        answerText.toLowerCase().includes(keyword)
      );

      if (!isRelevant) {
        setAnswer("I'm sorry, I can only provide information related to our coffee shop!");
        setGeneratingAnswer(false);
        return;
      }

      // Pick a random item from the menu for follow-up questions
      const randomMenuItem = menuItems[Math.floor(Math.random() * menuItems.length)];
      const followUpQuestions = `
        Would you like to try our ${randomMenuItem.name} as well?
        What size would you like?
        Cash or card?
        To go or in the cafe?
      `;

      // Set the chatbot's answer along with follow-up questions
      setAnswer(`${answerText}\n\n${followUpQuestions}`);
    } catch (error) {
      console.error(error);
      setAnswer("Sorry, something went wrong. Please try again!");
    }
    setGeneratingAnswer(false);
  }

  // Function to reset the chatbot form
  function handleReset() {
    setQuestion("");
    setAnswer("");
  }

  return (
    <div className="chatbot-container">
      <h3 className="chatbot-title">Place your order or ask a question!</h3>
      <form onSubmit={generateAnswer} className="chatbot-form">
        <textarea
          required
          className="chatbot-textarea"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="What would you like to order?"
        ></textarea>
        <button
          type="submit"
          className={`submit-button ${generatingAnswer ? "disabled" : ""}`}
          disabled={generatingAnswer}
        >
          Generate Answer
        </button>
      </form>

      {answer && (
        <div className="chatbot-response">
          <ReactMarkdown>{answer}</ReactMarkdown>
          <button onClick={handleReset} className="reset-button">
            Ask Another Question
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
