import BookTableMenu from "../../components/Booktablemenu";
import BreakFast from "../../components/Breakfast";
import DinnerMenu from "../../components/Dinnermenu";
import LaunchMenu from "../../components/Launchmenu";
import PageHeading from "../../components/Pageheading";

export default function OurMenu(){
    return (
        <div>
            <PageHeading/>
             <BreakFast/>
             <LaunchMenu/>
             <DinnerMenu/>
             <BookTableMenu/>
        </div>
        
    )
}