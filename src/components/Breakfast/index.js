export default function BreakFast(){
    return (
        <section class="breakfast-menu">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="breakfast-menu-content">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="left-image">
                                    <img src="img/breakfast_menu.jpg" alt="Breakfast"></img>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <h2>Breakfast Menu</h2>
                                <div id="owl-breakfast" class="owl-carousel owl-theme">
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="img/breakfast_item.jpg" alt=""></img>
                                            <div class="price">$3.50</div>
                                            <div class="text-content">
                                                <h4>Kale Chips Art Party</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="img/lunch_item.jpg" alt=""></img>
                                            <div class="price">$7.25</div>
                                            <div class="text-content">
                                                <h4>Drink Vinegar Prism</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="img/dinner_item.jpg" alt=""></img>
                                            <div class="price">$11.50</div>
                                            <div class="text-content">
                                                <h4>Taiyaki Gastro Tousled</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}