import Link from "next/link";

export default function ProductPage() {
  const product = ['shirt', 'pants', 'skirt', 'shoes'];
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {product.map((product, index) => (
          <>
            <li key={index}>
              <Link href={`product/${product}`}>{product}</Link>
            </li>
          </>
        ))}

      </ul>
    </>
  )
}