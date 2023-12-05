import { useState } from "react";

export default function Search({ searchText }) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="">
      <form onSubmit={onSubmit} className="">
        <div className="">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search Image Term..."
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}
