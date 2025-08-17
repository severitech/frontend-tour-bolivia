import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Formulario() {
  return (
    <div>
       <Link href={`/panel/usuarios`}><Button>Hola</Button></Link> 
    </div>
  )
}
