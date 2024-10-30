import { Button} from "antd";


export default function Home() {
  return (
   <div>
      {/* Slider */}
      <div id="sliders"></div>

      {/* Advertisement */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://bizweb.dktcdn.net/100/069/071/themes/895058/assets/layer-46.png?1697775911374"
              className="img-fluid"
              alt="Ảnh 1"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://bizweb.dktcdn.net/100/069/071/themes/895058/assets/layer-45.png?1697775911374"
              className="img-fluid"
              alt="Ảnh 2"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://bizweb.dktcdn.net/100/069/071/themes/895058/assets/layer-47.png?1697775911374"
              className="img-fluid"
              alt="Ảnh 3"
            />
          </div>
        </div>
      </div>

      {/* Best selling products */}
      <div className="sell-products text-center">
        <h2>SẢN PHẨM BÁN CHẠY</h2>
      </div>
      <div className="container mt-4">
        <div className="row" id="products"></div>
      </div>

      {/* See More Button */}
      <div className="container text-center mt-4">
        <Button href="#" className="btn btn-primary">XEM THÊM</Button>
      </div>

      <div id="slider"></div>
    </div>
  );
}

