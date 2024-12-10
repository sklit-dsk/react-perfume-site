function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="Logo pic"/>
          <div>
            <h3 className="text-uppercase">Perfume market</h3>
            <p className="opacity-5">The most delicious perfume</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="Cart pic"/>
            <span>50 eur</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="User pic"/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All perfume</h1>
          <div className="search-block d-flex"> 
            <img src="/img/search.svg" alt = "Search"/>
            <input type="text" placeholder="Search..."/>
          </div>
        </div>


        <div className="d-flex">
          <div className="card">
            <img src="/img/heart-unliked.svg" alt ="Heart unliked"/>
            <img width={133} height={112} src="/img/perfume/1.png" alt="Perfume"/>
            <h5>Women's perfume Chanel</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>99 eur</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/btn-add.svg" alt="Add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/perfume/2.png" alt="Perfume"/>
            <h5>Women's perfume Chanel</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>99 eur</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/btn-add.svg" alt="Add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/perfume/3.png" alt="Perfume"/>
            <h5>Women's perfume Chanel</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>99 eur</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/btn-add.svg" alt="Add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/perfume/4.png" alt="Perfume"/>
            <h5>Women's perfume Chanel</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>99 eur</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/btn-add.svg" alt="Add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default App;
