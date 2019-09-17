import axios from 'axios';

export default {
    //Route for entering the website
    goToSite: function(){
        axios.get("../pages/app/components/profile/profile.js")
    }
}