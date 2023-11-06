/**
 * random으로 key값 생성
 * @returns string
 */
export const getUniqueKey = () => {
  return `key_${Math.round(Math.random() * 100000000)}_${new Date().getTime()}`;
};

// 월, 일 자리수 변환
const zero = (value: number | string) =>
  value.toString().length === 1 ? `0${value}` : `${value}`;

// 날짜 포멧형식 변환
export const dateFormatter = (format: string, date: number | string) => {
  const date2 = new Date(date); // Date 객체로 만들어줍니다.
  return format.replace(
    /(yyyy|YYYY|mm|dd|MM|DD|H|i|s)/g,
    (t: string): string => {
      switch (t) {
        case "yyyy":
          return date2.getFullYear().toString();
        case "YYYY":
          return date2.getFullYear().toString();
        case "mm":
          return (date2.getMonth() + 1).toString();
        case "dd":
          return date2.getDate().toString();
        case "MM":
          return zero(date2.getMonth() + 1);
        case "DD":
          return zero(date2.getDate());
        case "H":
          return zero(date2.getHours());
        case "i":
          return zero(date2.getMinutes());
        case "s":
          return zero(date2.getSeconds());
        default:
          return "";
      }
    }
  );
};

// 숫자 천자리 마다 콤마 표시
export const convertComma = (number: number | undefined) => {
  if (!number) {
    return 0;
  }
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
