'use client' // Add this directive at the top

import React, { useState } from 'react'
import axios from 'axios'

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/products?search=${query}`)
      const products = response.data.docs // Assuming response.data.docs contains the products array
      const filteredProduct = products.find(
        product => product.title.toLowerCase() === query.toLowerCase(),
      )
      setResult(filteredProduct || null)
      console.log('Search result:', filteredProduct) // Print result to console
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for products..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {result ? (
          <div key={result.id}>
            <h3>{result.id}</h3>
            <h3>{result.title}</h3>
            <p>{result.meta.description}</p>
          </div>
        ) : (
          <p>No product found</p>
        )}
      </div>
    </div>
  )
}

export default SearchBar
