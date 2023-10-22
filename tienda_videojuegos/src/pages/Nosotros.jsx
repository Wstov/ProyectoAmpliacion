import imagen from '../assets/studio.webp'



function Nosotros() {
  return (
    <div>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="lc-block">
                <div editable="rich">

                  <p className="lead fw-bold text-primary">About us</p>

                  <h2 className="fw-bold display-2">Game Store</h2>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lc-block">
                <div editable="rich">
                  <p className="rfs-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat. In pellentesque scelerisque auctor. Ut porta lacus eget nisi fermentum lobortis. Vestibulum facilisis tempor ipsum, ut rhoncus magna ultricies laoreet. Proin vehicula erat eget libero accumsan iaculis.<br /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex container-fluid" lc-helper="background" style={{height:"50vh",background:`url(${imagen})  center / cover no-repeat`}}>
        </div>
        <div className="container bg-light shadow py-4" style={{ marginTop:"-100px"}}>
        <div className="row text-center justify-content-center">
          <div className="col-12">
            <div className="lc-block">
              <div editable="rich">
                <p className="fw-bold display-5">Our Company</p>
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
                <p className="rfs-9"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat. In pellentesque scelerisque auctor.
                  Ut porta lacus eget nisi fermentum lobortis. Vestibulum facilisis tempor
                  ipsum, ut rhoncus magna ultricies laoreet. Proin vehicula erat eget libero accumsan iaculis. </p>
              </div>
            </div>
            <div className="lc-block text-center">
              <a className="btn btn-primary btn-lg" href="#" role="button">Keep in touch</a>
            </div>
          </div>
        </div>
    </div>
      </section >
    </div >
  )
}

export default Nosotros
