import React from 'react'
import Link from 'next/link'

function Servicepage() {
  return (
    <div style={{listStyleType:"none"}}>
        <h2 style={{
            color:"blue", backgroundColor:"beige", display: "flex",justifyContent:"center",fontFamily:"sans-serif",fontWeight:"bold"
        }}>Service Page</h2>
        <Link href="../nestedpage">Nested Page</Link>
    </div>

  )
}

export default Servicepage