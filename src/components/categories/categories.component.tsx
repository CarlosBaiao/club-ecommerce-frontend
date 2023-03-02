import { useState, useEffect } from 'react'
import axios from 'axios'
import env from '../../config/env.config'

// Components
import CategoryItem from '../category-item/category-item.component'

// Styles
import './categories.styles.css'
import { CategoriesContainer, CategoriesContent } from './categories.styles'

// Utilities
import Category from '../../types/category.types'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log(categories)

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
