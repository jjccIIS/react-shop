import React from 'react'
import { Audio } from 'react-loader-spinner'
const LoadingComp = () => {
  // const [show, setShow] = useState(false)
  // useEffect(() => {
  //   let timeout = setTimeout(() => setShow(true), 300)
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [])


  return (
    <div className='h-screen flex justify-center items-center bg-green-50' >  
      <Audio    height="100"
                width="100"
                color="#EB6440"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
              />
    </div>
  )
}

export default LoadingComp
