
import Link from 'next/link'
import { MainLayout } from '../components/layout/MainLayout'
import { DarkLayOut } from '../components/layout/DarkLayout'



export default function AboutPage() {
  return (
    <>
        <div className={'description'}>
          <h1>
            <Link
              href="/"
              rel="noopener noreferrer"
            >
            Estoy en About
             Ir a home
            </Link>
          </h1>
        </div>
    </>
  )
}


AboutPage.getLayout = function (page: JSX.Element){
  return(
    <MainLayout>
      <DarkLayOut>
        {page}
      </DarkLayOut>
    </MainLayout>
  )
}