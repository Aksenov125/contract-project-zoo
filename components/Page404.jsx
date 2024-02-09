const React = require("react");
const Layout = require("./Layout");

function page404({title}) {
  return (
    <Layout title={title}>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1 text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h2 class="h2" style={{color:'red'}}>Похоже ты потерян</h2>

                  <p>страница, которую вы ищете, недоступна!</p>

                  <a href="/" class="link_404">
                    Вернуться домой
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

module.exports = page404;