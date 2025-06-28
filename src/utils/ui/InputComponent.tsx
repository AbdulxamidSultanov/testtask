import { useDispatch, useSelector } from "react-redux";
import {
  changeAboutValue,
  changeCerfValue,
  changeDegreeValue,
  changeExpValue,
  changeSkilsValue,
} from "../../features/componentSlice/configSlice";
import type { RootState } from "../../lib/store";

const InputComponent = () => {
  const dispatch = useDispatch();
  const componentConfig = useSelector(
    (state: RootState) => state.components.inputConfig
  );

  const refers = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (value === "Сертификаты") {
      dispatch(changeCerfValue(e.target.value));
    } else if (value === "Навыки") {
      dispatch(changeSkilsValue(e.target.value));
    } else if (value === "Опыт") {
      dispatch(changeExpValue(e.target.value));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
      {componentConfig.length > 0 &&
        componentConfig.map((item, idx) => {
          if (item.type === "input") {
            return (
              <div key={idx}>
                <label className="block text-gray-600 font-medium mb-2">
                  {item.value}
                </label>
                <input
                  onChange={(e) => refers(e, item.value)}
                  type={item.inputType}
                  placeholder={item.value}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            );
          } else if (item.type === "select") {
            return (
              <div key={idx}>
                <label className="block text-gray-600 font-medium mb-2">
                  {item.value}
                </label>
                <select
                  onChange={(e) => dispatch(changeDegreeValue(e.target.value))}
                  defaultValue=""
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="" disabled hidden>
                    Выберите...
                  </option>
                  {item.options?.map((o, index) => (
                    <option key={index} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            );
          } else if (item.type === "textarea") {
            return (
              <div key={idx}>
                <label className="block text-gray-600 font-medium mb-2">
                  {item.value}
                </label>
                <textarea
                  onChange={(e) => dispatch(changeAboutValue(e.target.value))}
                  className="w-full px-4 py-2 min-h-[100px] resize-y border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                ></textarea>
              </div>
            );
          } else {
          }
        })}
    </div>
  );
};

export default InputComponent;
