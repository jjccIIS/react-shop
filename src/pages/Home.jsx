import React from 'react'
import LoadingComp from '../components/LoadingComp'
import ProductDetailComp from '../components/ProductDetailComp'

const Home = (props) => {
  const {products,onAdd,onRemove,onRemoveAll,cartItems}  = props;
  return (
    <div className='flex justify-center'>
      
      <div className='flex justify-center  max-w-screen-lg y-full m-10 flex-wrap content-around bg-[#D6E4E5]'>
      {products.map((product)=>(
        <ProductDetailComp  onAdd={onAdd} 
                            onRemove={onRemove} 
                            onRemoveAll={onRemoveAll} 
                            product={product} 
                            cartItems={cartItems} 
                            key={product.id}/>
      ))}
      </div>
    </div>
  )
}

export default Home
