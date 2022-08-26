export default function Banner(){
    return(
        <section className="cook-delecious">
         <div className="container">
            <div className="row">
                <div className="col-md-3 col-md-offset-1">
                    <div className="first-image">
                        <img src="img/cook_01.jpg" alt=""></img>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cook-content">
                        <h4>We cook delecious</h4>
                        <div className="contact-content">
                            <span>You can call us on:</span>
                            <h6>+ 1234 567 8910</h6>
                        </div>
                        <span>or</span>
                        <div className="primary-white-button">
                            <a href="#" className="scroll-link" data-id="book-table">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="second-image">
                        <img src="img/cook_02.jpg" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}