import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const PRODUCTS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class Catalog extends React.Component {
  render() {
    return (
      <div>
        <SearchBlock />
        <ContentBlock products={this.props.products} />
      </div>
    )
  }
}

class SearchBlock extends React.Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='Search...' />
        <p>
          <input type='checkbox' />
          Only show products in stock
        </p>
      </form>
    )
  }
}

class ContentBlock extends React.Component {
  render() {
    const products = this.props.products
    const rows = []
    let lastCatalog = null

    products.forEach((product) => {
      if (lastCatalog !== product.category) {
        rows.push(
          <TitleCategory category={product.category} key={product.category} />
        )
      }

      rows.push(
        <CatalogItem product={product} key={product.name} />
      )

      lastCatalog = product.category
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
} <tr>
  <th colSpan="2">
    {category}
  </th>
</tr>

class TitleCategory extends React.Component {
  render() {
    const category = this.props.category

    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    )
  }
}

class CatalogItem extends React.Component {
  render() {
    const product = this.props.product
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>


    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

ReactDOM.render(
  <Catalog products={PRODUCTS} />,
  root
)