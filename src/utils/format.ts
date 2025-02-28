import dayjs from 'dayjs';

/**
 * 숫자를 콤마 형식으로 변환 (예외 처리 추가)
 */
export const formatNumber = (number?: number | null): string => {
   if (typeof number !== 'number' || isNaN(number)) {
      return '0'; // 🔹 기본값 설정 (undefined 또는 null 방지)
   }
   return number.toLocaleString();
};

/**
 * 날짜를 포맷하여 반환 (예외 처리 추가)
 */
export const formatDate = (date?: string | null, format?: string): string => {
   if (!date) {
      return '날짜 정보 없음'; // 🔹 `null` 또는 `undefined`인 경우 기본값 반환
   }

   const parsedDate = dayjs(date);
   if (!parsedDate.isValid()) {
      return '유효하지 않은 날짜'; // 🔹 날짜 형식이 올바르지 않은 경우
   }

   return parsedDate.format(format || 'YYYY년 MM월 DD일');
};
