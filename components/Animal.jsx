const React = require("react");

function Animal({ animal }) {
  return (
    <div class="product-wrap">
      <div class="product-image">
        <a href="">
          <img className="img-size" src={animal.picture} />
          <div class="shadow"></div>
        </a>
        <a class="detail-link" href="" ></a>
        <div class="actions">
          <div class="actions-btn">
            <a class="add-to-cart" href="" title="Добавить в корзину"></a>
            <a class="add-to-wishlist" href="" title="Добавить в мои желания">  </a>
            <a
              class="add-to-compare"
              href=""
              title="Добавить для сравнения"
            ></a>
          </div>
        </div>
      </div>
      <div className="porduct-back">
        <div class="product-list">
          <h3>{animal.name}</h3>
        </div>
      </div>
    </div>
  );
}

module.exports = Animal;
