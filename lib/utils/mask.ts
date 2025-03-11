export const PHONE_MASK = "(##) ####-####";
export const CELL_PHONE_MASK = "(##) #####-####";
export const ZIP_CODE_MASK = "#####-###";
export const CPF_MASK = "###.###.###-##";
export const CNPJ_MASK = "##.###.###/####-##";
export const CNH_MASK = "###########";
export const RG_MASK = "##.###.###-#";
export const PLATE_MASK = "AAA#A##";
export const RENAVAM_MASK = '###########'
export const RNTRC_MASK = '##############'

export const formatMask = (value: string, maskPattern: string): string => {
  let maskedValue = "";
  let valueIndex = 0;

  for (let maskIndex = 0; maskIndex < maskPattern.length; maskIndex++) {
    const currentChar = value[valueIndex];

    if (currentChar === undefined) {
      break;
    }

    switch (maskPattern[maskIndex]) {
      case "#":
        if (!/\d/.test(currentChar)) {
          return maskedValue;
        }
        maskedValue += currentChar;
        valueIndex++;
        break;
      case "A":
        if (!/[a-zA-Z]/.test(currentChar)) {
          return maskedValue;
        }
        maskedValue += currentChar;
        valueIndex++;
        break;
      case "*":
        if (/[a-zA-Z0-9]/.test(currentChar)) {
          maskedValue += value[valueIndex];
        }
        valueIndex++;
        break;
      default:
        maskedValue += maskPattern[maskIndex];
        if (maskPattern[maskIndex] === currentChar) {
          valueIndex++;
        }
    }
  }

  return maskedValue;
};