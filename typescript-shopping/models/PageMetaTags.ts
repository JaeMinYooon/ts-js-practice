/**
 * Opengraph 관련 데이터 저장 객체
 */
export interface PageMetaTags {
  site_name: string;
  title: string;
  description: string;
  og: {
    title: string;
    description: string;
  };
  img: string;
}
