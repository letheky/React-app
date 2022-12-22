import { Col } from "react-bootstrap";

function Product({ title, description, imgUrl }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="pro-imgbx">
        <img src={imgUrl} />
        <div className="pro-txtx">
          <h4>{title}</h4>
          <span><pre>{description}</pre></span>
        </div>
      </div>
    </Col>
  )
}

export default Product