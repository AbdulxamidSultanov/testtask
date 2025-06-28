import type { SelectListType } from "../types";
import InputComponent from "../utils/ui/InputComponent";
import SelectComponent from "../utils/ui/SelectComponent";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyPdfDocument } from "./RightSide";

const LeftSide = () => {
  const selectList: SelectListType[] = [
    { value: "Опыт", inputType: "text", type: "input" },
    {
      value: "Образование",
      inputType: "select",
      type: "select",
      options: ["Среднее", "Высшее", "Бакалавр", "Магистр", "Доктор Наук"],
    },
    { value: "Навыки", inputType: "text", type: "input" },
    { value: "Сертификаты", inputType: "text", type: "input" },
    { value: "О себе", inputType: "textarea", type: "textarea" },
  ];

  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-3xl shadow-2xl p-6 flex flex-col justify-between gap-6 overflow-auto">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-gray-700">Добавить поле</h2>
        <SelectComponent selectList={selectList} />

        <div className="border-t border-gray-100 pt-4">
          <InputComponent />
        </div>
      </div>

      <div>
        <PDFDownloadLink
          document={<MyPdfDocument />}
          fileName="резюме.pdf"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {({ loading }) => (loading ? "Генерация PDF..." : "Скачать PDF")}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default LeftSide;
