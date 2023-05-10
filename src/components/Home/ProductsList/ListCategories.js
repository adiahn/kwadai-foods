import React from 'react'
import { Link } from 'react-router-dom'

const ListCategories = ({foodCategories}) => {
  return (
    <ul className="foodCategories">
      {foodCategories.map((category) => (
        <li key={category.path}>
          <Link to={category.path}>{category.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default ListCategories
