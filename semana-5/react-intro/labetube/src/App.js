import logo from './logo.svg';
import './App.css';


function App() {


  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  const titulo = "Título do vídeo"



  return (
    <div className="App">

<body>
            <div className="tela-inteira">
                <header>
                    <h2>Lab Tube</h2>
                    <input type="text" placeholder="Busca" id="campoDeBusca" className="busca"/>
                    <button className="botao-busca">Search</button>
                    <spam className="userOption">
                      <img src="img\envio.png" />
                      <img src="img\envio.png" />
                      <img src="img\envio.png" />
                    </spam>
                </header>

                <main>
                    <nav className="menu-vertical">
                        <ul>
                          <div className="primeiro-menu">
                              <li className="botoes-meunu-vertical inicio">Início</li>
                              <li className="botoes-meunu-vertical">Em alta</li>
                              <li className="botoes-meunu-vertical">Inscrições</li>
                          </div>
                            <li className="botoes-meunu-vertical">Originais</li>
                            <li className="botoes-meunu-vertical">Histórico</li>
                        </ul>

                        <footer>
                            <div>Sobre </div>
                            <div>  Imprensa</div>
                            <div>Direitos autorais</div>

                            <div>Criadores de conteúdo </div>

                            <div>Publicidade</div>

                            <div>Desenvolvedores</div>
                            

                            <div>Termos</div>

                            <div>Privacidade</div>

                            <div>Política e segurança</div>
                            <div>Como funciona a Labetube</div>
                            <div>Testar novos recursos</div>

                        

                        </footer>

                    </nav>

  

                    <section className="painel-de-videos">

                        <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                            <img src="https://picsum.photos/400/400?a=1 " alt="" className="thumbnail"/>
                            <h4 className="titulo-video">{titulo}</h4>
                        </div>
                        <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                            <img src="https://picsum.photos/400/400?a=2 " alt="" className="thumbnail"/>
                            <h4 className="titulo-video">{titulo}</h4>
                        </div>
                        <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                            <img src="https://picsum.photos/400/400?a=3 " alt="" className="thumbnail"/>
                            <h4 className="titulo-video">{titulo}</h4>
                        </div>
                        <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                            <img src="https://picsum.photos/400/400?a=4 " alt="" className="thumbnail"/>
                            <h4 className="titulo-video">{titulo}</h4>
                        </div>
                        <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                            <img src="https://picsum.photos/400/400?a=5 " alt="" className="thumbnail"  />
                            <h4 className="titulo-video">{titulo}</h4>
                        </div>
                        <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                            <img src="https://picsum.photos/400/400?a=6 " alt="" className="thumbnail"/>
                            <h4 className="titulo-video">{titulo}</h4>
                        </div>
                        <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                            <img src="https://picsum.photos/400/400?a=7 " alt=""className="thumbnail" />
                            <h4 className="titulo-video">{titulo}</h4>
                        </div>
                        <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                            <img src="https://picsum.photos/400/400?a=8 " alt="" className="thumbnail"/>
                            <h4 className="titulo-video">{titulo}</h4>
                        </div>
                    </section>
                </main>


            </div>
        </body>




    </div>
  );
}

export default App;

