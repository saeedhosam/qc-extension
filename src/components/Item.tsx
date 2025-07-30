import { useState } from "react";

export default function Item() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-center">
      <div className="border cursor-pointer p-4">
        <div className="p-10">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
          className="m-10"
        />
        <label>Click me!</label>
      </div>
      </div>
    </div>
  );
}
