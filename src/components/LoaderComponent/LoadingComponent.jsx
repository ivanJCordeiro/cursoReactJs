import { hourglass } from 'ldrs'
import "./LoadingComponent.css"

hourglass.register()

const LoadingComponent = () => {
  return (
    <div className='loader'>
        <l-hourglass
            size="150"
            bg-opacity="0.21"
            speed="1.8" 
            color="rgb(33, 164, 197)" 
        ></l-hourglass>
    </div>

  )
}

export default LoadingComponent