'use client' // 13v에서 client 렌더링을 하기위해 사용

import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1) }>
        숫자 증가시키기 
      </button>
    </>
  )
}
