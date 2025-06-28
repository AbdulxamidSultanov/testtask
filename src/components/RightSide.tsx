import {
  Document,
  Font,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import type { RootState } from "../lib/store";
import type { pdfViewerType } from "../types";
import RobotFont from "../fonts/Roboto-VariableFont_wdth,wght.ttf";

Font.register({
  family: "Roboto",
  src: RobotFont,
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#333",
    lineHeight: 1.6,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#222",
  },
  section: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottom: "1pt solid #ddd",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#444",
  },
  sectionContent: {
    fontSize: 12,
    color: "#333",
  },
});

export const MyPdfDocument = ({
  aboutValue,
  cerfValue,
  degreeValue,
  expValue,
  skilsValue,
}: pdfViewerType) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Резюме</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Образование</Text>
          <Text style={styles.sectionContent}>
            {degreeValue || "Не указано"}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Опыт работы</Text>
          <Text style={styles.sectionContent}>{expValue || "Не указано"}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Навыки</Text>
          <Text style={styles.sectionContent}>
            {skilsValue || "Не указано"}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Сертификаты</Text>
          <Text style={styles.sectionContent}>{cerfValue || "Не указано"}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>О себе</Text>
          <Text style={styles.sectionContent}>
            {aboutValue || "Не указано"}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

const RightSide = () => {
  const { aboutValue, cerfValue, degreeValue, expValue, skilsValue } =
    useSelector((state: RootState) => state.components);
  return (
    <div className="w-full h-full max-md:hidden bg-white border border-gray-200 rounded-3xl shadow-2xl p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">PDF Превью</h2>
      <div className="w-full h-[85%]">
        <PDFViewer width="100%" height="100%">
          <MyPdfDocument
            aboutValue={aboutValue}
            cerfValue={cerfValue}
            degreeValue={degreeValue}
            expValue={expValue}
            skilsValue={skilsValue}
          />
        </PDFViewer>
      </div>
    </div>
  );
};

export default RightSide;
