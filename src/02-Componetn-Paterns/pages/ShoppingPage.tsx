import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark"
        initialValues={{
          count: 4,
          maxCount: 7
        }}
      >
        {
          ({ reset, isMaxCountReached, count, increaseBy }) => (
            <>
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px #1d1d1d' }} />
              <ProductTitle title={''} className="text-white text-bold" />
              <ProductButtons className="custom-buttons" style={{}} />
              <button type="button" onClick={reset}>Reset</button>
              <button type="button" onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && <button onClick={() => increaseBy(2)} type="button">+2</button>}
              <span>{count}</span>
            </>
          )
        }

      </ProductCard>
    </div>
  )
}






