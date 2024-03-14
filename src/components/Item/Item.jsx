import { Link } from "react-router-dom";

const Item = ({id, name, img, category, price}) => {
          return (

<article class="row">
  <div class="col-sm-3 text-center p-5">
    <div class="card">
      <div class="card-body">
          <img  className="rounded" src={img} style={{width: 200}}/>
        <h1 class="card-title mt-4 h2">{name}</h1>
        <p>categoría: {category}</p>
        <h2 class="h4">${price}</h2>
        <p class="card-text"></p>
        <Link to = {`/detail/${id}`}className="btn btn-secondary mb-2">Ver Detalle</Link>
      </div>
    </div>
  </div>
  </article>
          )
}

export default Item;







