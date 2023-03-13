import { FunctionComponent } from 'react'
import CategoryDetails from '../../components/category-datails/category-details.component'
import Header from '../../components/header/header.components'
import { useParams } from 'react-router-dom'

const CategoryDetailsPage: FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  )
}

export default CategoryDetailsPage
