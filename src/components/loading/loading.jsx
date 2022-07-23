import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = () => {
    return Array(6).fill({}).map(()=>{
          return(
              <div className="col-4 text-center p-5">
                <Skeleton className=" mb-4"circle={true} height={100} width={100}/>  
                <Skeleton className=" mb-2" height={30} count={2}/>  
              </div>
          )
      })
    
}
 
export default Loader;