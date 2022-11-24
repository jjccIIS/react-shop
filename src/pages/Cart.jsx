import React from 'react'
function formatMoney(number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}



const Cart = (props) => {
  const { cartItems, onAdd, onRemove, onRemoveAll } = props;
  const total = { subtotal: 0, tax: 0, shipping: 0, total: 0 }
  const NameLength = (text, len) => {
    return text.length > len ? text.substring(0, len) + '...' : text
  };
  const Totalizer = () => {
    cartItems.map((product) => {
      total.subtotal += product.qty * product.price
      total.shipping += product.shipping
      total.tax += (product.tax / 100) * total.subtotal
      total.total += total.subtotal + total.shipping + total.tax
    })
  }

  return (
    <div className='flex flex-row flex-wrap justify-center items-center my-5'>

      {cartItems.length === 0 ? (<div>Cart is Empty</div>) :
        (<ul className='bg-white rounded-lg border border-gray-200 w-96 text-gray-900'>
          {cartItems.map((product) =>
            <li className='px-1 py-2 border-b border-gray-200 w-full'
              key={product.id}>

              <span
                className="w-95 mx-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                <img className="rounded-full w-14 h-14 max-w-none" alt="A"
                  src={product.image} />
                <div className='flex justify-between w-96'>
                  <span title={product.name} className="flex items-center px-3 py-2">
                    {NameLength(product.name, 50)}
                  </span>
                  <button onClick={() => onRemoveAll(product)}
                    className="bg-transparent hover focus:outline-none justify-end">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                      className="w-3 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 352 512">
                      <path fill="currentColor"
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                      </path>
                    </svg>
                  </button>
                </div>
              </span>
              <div className='flex justify-center my-2'>
                <button onClick={() => onAdd(product)}
                  type="button" className="inline-block px-2 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">+</button>
          
                <p className='text-lg text-center text-gray-500 font-bold w-10' >{product.qty}</p>
          
                <button onClick={() => onRemove(product)}
                  type="button" className="inline-block px-2 bg-red-600 text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">-</button>
                <p >=  {formatMoney(product.qty * product.price)}</p>
              </div>

            </li>
          )}
        </ul>)
      }
      {cartItems.length !== 0 ? (
        <div className='flex m-5 flex-col'>
          {Totalizer()}
          <ul className='bg-white rounded-lg border border-gray-200 w-96 text-gray-900'>
            <li className='px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-gray-400 text-white'><p>Sub Total</p><span>{formatMoney(total.subtotal)}</span></li>
            <li className='px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-gray-400 text-white'><p>Tax</p>Tax   <span>{formatMoney(total.tax)}</span></li>
            <li className='px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-gray-400 text-white'><p>Shipping</p> <span>{formatMoney(total.shipping)}</span></li>
            <li className='px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-400 text-white'><p>Total</p>    <span>{formatMoney(total.total)}</span></li>
          </ul>
          <button type="button" className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={()=>alert("Implement Payment")}>
            Checkout
          </button>

        </div>
      ) : (<div></div>)}

    </div>
  )
}

export default Cart
