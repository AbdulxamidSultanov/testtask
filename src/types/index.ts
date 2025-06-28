export interface SelectListType {
  inputType: string;
  type: string;
  value: string;
  options?: string[];
}


export interface SelectProps {
  selectList: SelectListType[];
  onChange?: () => void;
}

export interface sliceType {
  inputConfig: SelectListType[];
  expValue: string
  skilsValue: string;
  degreeValue: string;
  aboutValue: string;
  cerfValue: string;
}

export interface pdfViewerType {
  expValue?: string
  skilsValue?: string;
  degreeValue?: string;
  aboutValue?: string;
  cerfValue?: string;
}