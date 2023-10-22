import imagen from '../assets/studio.webp'
import imagen2 from '../assets/pexels.webp'
import { Link } from 'react-router-dom'



function Nosotros() {
  return (
    <>
      <section className="py-4 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="lc-block">
                <div editable="rich">

                  <p className="lead fw-bold text-primary">Sobre Nosotros</p>


                  <h2 className="fw-bold display-2">Game Store LTD</h2>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lc-block">
                <div editable="rich">
                  <p className="rfs-9 mt-3">Desde nuestros inicios, hemos sido apasionados por el mundo del gaming, una pasión que nos ha impulsado a convertirnos en uno de los referentes en la venta de videojuegos, consolas y artículos gamer. Nos enorgullece ofrecer a nuestra comunidad una selección curada de títulos, desde los lanzamientos más actuales hasta esos clásicos que marcaron época.<br /></p>
                  <p className='mt-3'>Pero eso no es todo. Sabemos que la nostalgia es una parte fundamental del mundo del videojuego. Por eso, en nuestras tiendas, además de encontrar las últimas novedades del mundo gamer, también podrás disfrutar de nuestras máquinas de videojuegos retro. Un viaje al pasado donde podrás revivir aquellos momentos de tu infancia o juventud, jugando a esos títulos que dejaron huella en generaciones enteras.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex container-fluid" lc-helper="background" style={{ height: "50vh", background: `url(${imagen})  center / cover no-repeat` }}>
        </div>
        <div className="container bg-light shadow py-4" style={{ marginTop: "-100px" }}>
          <div className="row text-center justify-content-center">
            <div className="col-12">
              <div className="lc-block">
                <div editable="rich">
                  <p className="fw-bold display-5">Nuestra Mision</p>
                </div>
              </div>
            </div>
            <div className="lc-block col-5">
              <hr />
            </div>
          </div>
          <div className="row text-center justify-content-center">
            <div className="col-lg-10 col-xxl-8">
              <div className="lc-block mb-5">
                <div editable="rich">
                  <p className="rfs-9"> En Game Store, nuestra misión es simple pero apasionada: conectar a las personas con el mundo del gaming, enriqueciendo sus vidas con experiencias lúdicas inolvidables y fortaleciendo la cultura gamer en nuestra comunidad. </p>
                  <p>Ofrecer Calidad: Brindar a nuestros clientes una gama selecta de videojuegos, consolas y artículos gamer de la más alta calidad, garantizando una experiencia de juego insuperable.

                    <br /> Constantemente: Estamos siempre atentos a las tendencias y avances en el mundo del videojuego para llevar a nuestra comunidad lo último en tecnología y entretenimiento.

                    <br />Fomentar la Comunidad: Más allá de ser un simple punto de venta, deseamos ser un espacio donde los gamers puedan reunirse, compartir experiencias, aprender y crecer juntos en su pasión por los videojuegos.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section >
      <section className="py-4 py-lg-6 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0 text-center">
              <div className="lc-block mb-3">

                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor"
                  viewBox="0 0 16 16" style={{}} lc-helper="svg-icon">
                  <path
                    d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z">
                  </path>
                </svg>

              </div>

              <div className="lc-block">
                <span className="display-4" editable="inline"><b className="fw-bold">8765</b></span>
                <div editable="rich">Clientes</div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0 text-center">
              <div className="lc-block mb-3">

                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor"
                  viewBox="0 0 16 16" style={{}} lc-helper="svg-icon">
                  <path d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  <path
                    d="M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2zM8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z">
                  </path>
                </svg>

              </div>
              <div className="lc-block">
                <span className="display-4" editable="inline"><b className="fw-bold">2534</b></span>
                <div editable="rich">
                  <p>Videojuegos</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0 text-center">
              <div className="lc-block mb-3">

                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor"
                  viewBox="0 0 16 16" style={{}} lc-helper="svg-icon">
                  <path
                    d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z">
                  </path>
                </svg>

              </div>
              <div className="lc-block">
                <span className="display-4" editable="inline"><b className="fw-bold">+AAA</b></span>
                <div editable="rich">Valoración</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 py-lg-6">
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <div className="lc-block mb-3">
                <div editablen="rich">
                  <h2 className="fw-bold display-6">Que dicen nuestros clientes:</h2>
                </div>
              </div>

              <div className="lc-block mb-3">
                <div className="d-inline-flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor"
                      viewBox="0 0 16 16" style={{}} lc-helper="svg-icon" className="text-muted">
                      <path
                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                      </path>
                    </svg>
                  </div>

                  <div className="ms-3 align-self-center" editable="rich">
                    <p className="rfs-10">Quickly design and customize responsive mobile-first sites with Bootstrap,
                      the world’s most popular front-end open source toolkit, featuring Sass variables and
                      mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript
                      plugins.</p>
                  </div>
                </div>
              </div>


            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <div className="lc-block mb-3">
                <img className="rounded-start"
                  src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NDJ8fG1hbiUyMHB1cnBsZXxlbnwwfDJ8fHwxNjQ1Nzk5ODc2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080"
                  alt="Foto de Perfil" width="400"
                  srcSet="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NDJ8fG1hbiUyMHB1cnBsZXxlbnwwfDJ8fHwxNjQ1Nzk5ODc2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NDJ8fG1hbiUyMHB1cnBsZXxlbnwwfDJ8fHwxNjQ1Nzk5ODc2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NDJ8fG1hbiUyMHB1cnBsZXxlbnwwfDJ8fHwxNjQ1Nzk5ODc2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NDJ8fG1hbiUyMHB1cnBsZXxlbnwwfDJ8fHwxNjQ1Nzk5ODc2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NDJ8fG1hbiUyMHB1cnBsZXxlbnwwfDJ8fHwxNjQ1Nzk5ODc2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w"
                  sizes="(max-width: 1080px) 100vw, 1080px" height="400" />
              </div>
              <div className="lc-block">
                <div className="d-flex px-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor"
                      viewBox="0 0 16 16" style={{}} lc-helper="svg-icon">
                      <path
                        d="M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z">
                      </path>
                    </svg>
                  </div>
                  <div className="lc-block ps-4">
                    <div editable="rich">
                      <h3 className="h5 ">Ralph Macchio<br /></h3>
                      <p>Xbox 360</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-lg-6">
        <div className="container py-5 mb-4 bg-light rounded-3 "
          style={{ height: "50vh", background: `url(${imagen2})  center / cover no-repeat` 
          }}>
          <div className="p-5 mt-4 lc-block">
            <div className="lc-block mb-4">

            </div>
            <div className="lc-block mb-5 pt-5">
              <div editable="rich ">
                <h2 className="display-5 fw-bold text-light">LLeva tu juego</h2>
                <h2 className="display-5 fw-bold text-light">al siguiente nivel</h2>
              </div>
            </div>

            <div className="lc-block">
              <Link  className="btn btn-light btn-lg" to="/tiendadevideojuegos/contacto" role="button">Contactanos</Link>
            </div>
          </div>
        </div>
      </section >
      <section
        style={{ background: `url:` }}>
        <div className="container pt-5">
          <div className="row min-vh-25 align-items-center text-center">
            <div className="col-xl-4 mb-5 mb-xl-0">
              <div className="lc-block">
                <div className="d-inline-flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor"
                      viewBox="0 0 16 16" lc-helper="svg-icon">
                      <path
                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                      </path>
                    </svg>
                  </div>

                  <div className="ms-3 align-self-center" editable="rich">
                    <p className="lead">901-773-4045</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 mb-5 mb-xl-0">
              <div className="lc-block">
                <div className="d-inline-flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1" width="2em" height="2em" viewBox="0 0 24 24" style={{}} lc-helper="svg-icon"
                      fill="currentColor">
                      <path
                        d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z">
                      </path>
                    </svg>
                  </div>

                  <div className="ms-3 align-self-center" editable="rich">
                    <p className="lead">Menlo Park en Palo Alto California</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 mb-5 mb-xl-0">
              <div className="lc-block">
                <div className="d-inline-flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1" width="2em" height="2em" viewBox="0 0 24 24" style={{}} lc-helper="svg-icon"
                      fill="currentColor">
                      <path
                        d="M13 17H17V14L22 18.5L17 23V20H13V17M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11V18H4V8L12 13L20 8V14H22V6A2 2 0 0 0 20 4M12 11L4 6H20Z">
                      </path>
                    </svg>
                  </div>

                  <div className="ms-3 align-self-center" editable="rich">
                    <p className="lead">mail@gamestore.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ >
  )
}

export default Nosotros
