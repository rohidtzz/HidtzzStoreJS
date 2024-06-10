"use client";
import { useState } from 'react';

const Description = ({ text }:{text:string}) => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => setShowFullText(!showFullText);

  const truncatedText = text.length > 100 ? `${text.substring(0, 100)}...` : text;

  return (
    <div>
      <p className="text-gray-700 text-base text-justify" dangerouslySetInnerHTML={{ __html: showFullText ? text : truncatedText }}>{/* {showFullText ? text : truncatedText} */}</p>
      {text.length > 100 && (
        <button onClick={toggleText} className="text-blue-500" 
        dangerouslySetInnerHTML={{ __html: showFullText ? 'Show less' : 'Read more'}}>{/* {showFullText ? 'Show less' : 'Read more'} */}</button>
      )}
    </div>
  );
};

export default Description;
