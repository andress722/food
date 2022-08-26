export default function ContactUs(){
    return (
        
        <section class="contact-us">
             <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                             <div class="section-heading">
                                    <h2>Message</h2>
                            </div>
                    <form id="contact" action="" method="post">
                        <div class="row">
                            <div class="col-md-6">
                                <fieldset>
                                    <input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required=""></input>
                                </fieldset>
                                <fieldset>
                                    <input name="email" type="text" class="form-control" id="email" placeholder="Your email..." required=""></input>
                                </fieldset>
                                <fieldset>
                                    <input name="phone" type="text" class="form-control" id="phone" placeholder="Your phone..." required=""></input>
                                </fieldset>
                            </div>
                            <div class="col-md-6">
                                <fieldset>
                                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                </fieldset>
                                <fieldset>
                                    <button type="submit" id="form-submit" class="btn">Send Message</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-6">
                    <div class="section-heading contact-info">
                        <h2>Contact Info</h2>
                        <p>Pellentesque nec orci in erat venenatis viverra. Vivamus in lorem et leo feugiat ullamcorper. Donec volutpat fermentum erat non aliquet. Cras fermentum, risus a blandit sodales, erat turpis eleifend lacus, venenatis mollis leo lorem vel eros. Quisque et sem tempus, feugiat urna iaculis, tempor metus.
                        
                            <em>30 Raffles Ave, Singapore 039803</em>
                        </p>
                    
                    </div>
                </div>
                </div>
                </div>
                </section>
            
    
    )
}