import { PageMetaTags } from "../../models/PageMetaTags";

/**
 * <Head> 컴포넌트에 삽입할 mete tag들을 반환한다
 * @param tags 사용할 meta tag object
 * @returns React.fragment로 감싸진 meta tags
 */
function renderMetaTags(tags: PageMetaTags) {
  return (
    <>
      <title>{tags.title}</title>
      <meta name="description" content={tags.description} />
      <meta property="og:site_name" content={tags.site_name} />
      <meta property="og:title" content={tags.og.title} />
      <meta property="og:description" content={tags.og.description} />
      <meta property="og:image" content={tags.img} />
      <meta property="og:image:width" content={"120"} />
      <meta property="og:image:height" content={"120"} />
    </>
  );
}

export default renderMetaTags;
