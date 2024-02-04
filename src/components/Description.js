import React from "react";

const Description = () => {
  return (
    <div>
      <h1 className=" text-3xl tracking-widest uppercase font-light underline">
        Welcome to Code Doctor!
      </h1>
      <p className=" mt-10 tracking-widest text-gray-900 font-medium">
        Code Doctor is here to diagnose and treat your code's ailments. Our
        expert tool can help you detect and refactor common code smells,
        including:
      </p>
      <ul className="mt-5 list-disc pl-8 space-y-5">
        <li className=" tracking-widest text-gray-400 cursor-pointer hover:text-gray-700">
          Overly Long Methods/Functions: We'll identify methods or functions
          that have grown too large, making them harder to read and maintain.
        </li>
        <li className=" tracking-widest text-gray-400 cursor-pointer hover:text-gray-700">
          Crowded Parameter Lists: We'll flag functions with excessive
          parameters, which can obscure code clarity and increase testing
          complexity.
        </li>
        <li className=" tracking-widest text-gray-400 cursor-pointer hover:text-gray-700">
          Duplicated Code Fragments: We'll uncover code sections that repeat
          themselves, leading to potential inconsistencies and wasted space.
        </li>
      </ul>
      <h1 className=" mt-16 text-2xl tracking-widest">
        Ready to streamline your code and boost its health? Let Code Doctor make
        a house call today!
      </h1>
    </div>
  );
};

export default Description;
