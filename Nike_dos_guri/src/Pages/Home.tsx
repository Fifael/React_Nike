const Home = () => {
    return (
        <body>
            <header>
                <div className="menu">
                    <div className="principal">
                        <img
                            className="jordan"
                            src="https://static.nike.com.br/v10-122-0/images/brands/jordan.svg"
                            alt="yhrh"
                        />
                        <img
                            className="snkrs"
                            src="https://static.nike.com.br/v10-122-0/images/brands/snkrs.svg"
                            alt=""
                        />
                    </div>
                    <div className="btns">
                        <button className="btn-ajuda">Ajuda</button>
                        <p>|</p>
                        <button className="btnjunte">Junte-se a nós</button>
                        <p>|</p>
                        <button className="btn-entrar">Entrar</button>
                    </div>
                </div>
                <div className="filtro">
                    <div className="logo">
                        <img
                            className="nike"
                            src="https://static.nike.com.br/v10-122-0/images/brands/logo.svg"
                            alt="" />
                    </div>
                    <div className="navegacao">
                        <a href="https://www.nike.com.br/nav?sorting=DescReleaseDate">Lancamento</a>
                        <a href="https://www.nike.com.br/nav/ofertas/emoferta">Ofernas</a>
                        <a href="https://www.nike.com.br/sc/feminino-1">Feminino</a>
                        <a href="https://www.nike.com.br/sc/masculino-1">Masculino</a>
                        <a href="https://www.nike.com.br/nav/idade/infantil">Infantil</a>
                        <a href="https://www.nike.com.br/snkrs">SNKRS</a>
                    </div>
                    {<div className="pesquisa">
                        <form action="">
                            <button className="btnPesquisa">
                                <svg>
                                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.53 4.23-1.44l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </svg>
                            </button>
                            <input type="text" placeholder="Buscar" />
                        </form>
                        <button className="Btnsacola">
                            <svg>
                                <path d="M7 6V4C7 3.46957 7.21071 2.96086 7.58579 2.58579C7.96086 2.21071 8.46957 2 9 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V6H19C20.1046 6 21 6.89543 21 8V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V8C3 6.89543 3.89543 6 5 6H7ZM5 8V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V8H5ZM9 6H15V4H9V6Z"></path>
                                <title>Sacola vazia</title>
                            </svg>
                        </button>
                    </div>}
                </div>
            </header>
        </body>
    )
}
    
export default Home;