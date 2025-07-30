import { useState } from "react";

export default function Item() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="p-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleOnChange}
        className="mr-2"
      />
      <label>Click me!</label>
    </div>
  );
}
