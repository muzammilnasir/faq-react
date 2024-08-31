import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function App() {
  // State to track which FAQ item is currently open
  const [accordionOpen, setAccordionOpen] = useState(null);

  const faqData = [
    { id: 1, title: "This is title 1", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores a quae pariatur illo impedit, animi iure unde odio quasi quia!" },
    { id: 2, title: "This is title 2", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores a quae pariatur illo impedit, animi iure unde odio quasi quia!" },
    { id: 3, title: "This is title 3", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores a quae pariatur illo impedit, animi iure unde odio quasi quia!" },
    { id: 4, title: "This is title 4", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores a quae pariatur illo impedit, animi iure unde odio quasi quia!" },
    { id: 5, title: "This is title 5", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores a quae pariatur illo impedit, animi iure unde odio quasi quia!" },
  ];

  return (
    <>
      <div className="bg-gray-900 w-screen h-screen flex items-center justify-center">
        <div className="w-[500px] space-y-2">
          {faqData.map((faq, index) => (
            <div key={faq.id}>
              <div className="bg-gray-700 rounded-lg w-full">
                <button
                  onClick={() => setAccordionOpen(accordionOpen === index ? null : index)}
                  className="px-[20px] py-[10px] flex items-center justify-between w-full"
                >
                  <span className="font-semibold text-xl">{faq.title}</span>
                  <IoMdArrowDropdown size={25} className={`${accordionOpen === index ? "-rotate-180" : "rotate-0"} transition-all duration-300`} />
                </button>
                <div
                  className={`grid overflow-hidden px-[20px] transition-all duration-300 ease-in-out text-gray-400
                    ${accordionOpen === index ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="overflow-hidden">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
