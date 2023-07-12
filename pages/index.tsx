
import Link from 'next/link'
import { MainLayout } from '../components/layout/MainLayout'



export default function Home() {
  return (
    <MainLayout>
      <div className={'description'}>
          <h1 >
            
            <Link
              href="/about"
              rel="noopener noreferrer"
            >
               Estoy en home ir a about
            </Link>
          </h1>
        </div>
    </MainLayout>
  )
}
