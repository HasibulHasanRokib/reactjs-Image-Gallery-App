import { useLocation, useParams } from "react-router-dom"

const Image = () => {

const {id}=useParams();
const location=useLocation();

const{regular}=location.state;

  return (
    <div>
      <img src={regular} alt="" />
    </div>
  )
}

export default Image
