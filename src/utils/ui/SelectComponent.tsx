import { useDispatch, useSelector } from "react-redux";
import type { SelectProps } from "../../types";
import { addInputConfig } from "../../features/componentSlice/configSlice";
import type { RootState } from "../../lib/store";
import { useState } from "react";

const SelectComponent = ({ selectList }: SelectProps) => {
  const [selectValue, setSelectValue] = useState("");
  const dispatch = useDispatch();
  const componentConfig = useSelector(
    (state: RootState) => state.components.inputConfig
  );
  const handlerChanger = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectValue("");
    const selectItem = selectList.find(
      (selected) => selected.value === selectedValue
    );

    const isDuplicate = componentConfig?.some(
      (item) => item.value === selectedValue
    );

    if (selectItem && !isDuplicate) {
      dispatch(addInputConfig(selectItem));
    }
  };

  return (
    <div className="w-full">
      <label className="block text-gray-600 font-medium mb-2">
        Выберите поле
      </label>
      <select
        value={selectValue}
        onChange={handlerChanger}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="" disabled hidden>
          Выберите...
        </option>
        {selectList.map((select, index) => (
          <option key={index} value={select.value}>
            {select.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
