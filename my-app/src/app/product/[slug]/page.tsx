interface Props {
  params : {
    slug: string;
  }
}

export default function PantsPage({params} : Props) {
  return (
    <h1>{params.slug}PantsPage</h1>
  )
}


/**
 *   dynamic routing 2
 *  return map 함수 주의
 *   - 기본 형태
 *  test.map(() => {})
 *   - dynamic routing 형태..?
 *  test.map(() => ({}))
 *  동적 라우팅을 아래와 같이 지정하면 해당 라우팅도 SSR로 동작을 함.
 * */ 
export function generateStaticParams() {
  const products = ['skirt', 'pants'];
  return products.map((product: string) => ({
    slug: product
  }))
}