import axios from 'axios';
let baseUrl = "https://api.edamam.com/search";

class FetchData {
        getRecipeFromAPI(){

                return axios.get("https://api.edamam.com/search?app_id=97875047&app_key=13a31b794de48e8c01b66e91ef648500	&q=Special&diet=balanced&from=0&to=5");
                // return axios({
                //         method: "get",
                //         url: `${baseUrl}`,
                //         data: {
                //                 app_id: `97875047`,
                //                 app_key: '13a31b794de48e8c01b66e91ef648500',
                //                 q:'Special',
                //                 diet: 'balanced',
                //                 from: '0',
                //                 to: '10'
                //         },
                //         headers: {
                //                 "Content-Type": "application/json",
                //                 charset: "utf-8"
                //         }
                // })
        }
}

export default new FetchData();

