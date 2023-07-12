
import { MainLayout } from "../../components/layout/MainLayout"
import Link from "next/link"
import React from 'react'

const index = () => {
  return (
     <MainLayout>
      <div className={'description'}>
          <h1>
            <Link
              href="/"
              rel="noopener noreferrer"
            >
            Estoy en Pricing
             Ir a home
            </Link>
          </h1>
        </div>
    </MainLayout>
  )
}

export default index

