import { v4 as uuidv4 } from "uuid";

/**
 * DateInfo
 */
export interface DateInfo {
  /** ID */
  id: string;
  /** 날짜 */
  date: string;
  /** 설명 */
  description: string;
  /** 평점 */
  stars: number;
}
