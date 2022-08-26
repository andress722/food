import Banner from "../../components/Banner"
import Food from "../../components/Food"
import ServiceFood from "../../components/Servicesfood"
import BookTable from "../../components/Booktable"
import GetApp from "../../components/Getapp"
import FeatureFood from "../../components/Featurefood"
import OurBlog from "../../components/Blog"



function Home(){
 return (
    <div>
       <Banner/>
       <Food/>
       <ServiceFood/>
       <BookTable/>
       <GetApp/>
       <FeatureFood/>
       <OurBlog/>
    </div>
 )   
}

export default Home