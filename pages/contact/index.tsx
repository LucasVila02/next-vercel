
import Link from "next/link"
import { MainLayout } from "../../components/layout/MainLayout"


const contact = () => {
  return (
    <MainLayout>
      <div className={'description'}>
          <h1>
            <Link
              href="/"
              rel="noopener noreferrer"
            >
              Estoy en Contact
             Ir a home
            </Link>
          </h1>
        </div>
    </MainLayout>

  )
}

export default contact

