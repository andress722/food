export default function DinnerMenu(){
    return (
        <section class="dinner-menu">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="dinner-menu-content">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="left-image">
                                    <img src="img/dinner_menu.jpg" alt=""></img>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <h2>Dinner Menu</h2>
                                <div id="owl-dinner" class="owl-carousel owl-theme">
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="img/dinner_item.jpg" alt=""></img>
                                            <div class="price">$8.25</div>
                                            <div class="text-content">
                                                <h4>Meal Apples Almonds</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="img/lunch_item.jpg" alt=""></img>
                                            <div class="price">$12.50</div>
                                            <div class="text-content">
                                                <h4>Ditch Corn Art</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item col-md-12">
                                        <div class="food-item">
                                            <img src="img/breakfast_item.jpg" alt=""></img>
                                            <div class="price">$16.00</div>
                                            <div class="text-content">
                                                <h4>Kale Chips Art Party</h4>
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