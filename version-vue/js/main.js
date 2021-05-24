const app = new Vue({
    el:"#app",
    data:{
        img: "./img/logo.png",
        dischi: [],
        genere: [],
        filtraggio: []
    },
    created(){
        const dataURL= "http://localhost/esercizi%20boolean/php-ajax-dischi/version-vue/database/database-json.php";
        axios
        .get(dataURL)
        .then(result => {
            console.log(result.data);
            this.dischi = result.data.database_filtered;
            console.log();
        })
        .catch(err => {
            console.log(err);
        });
    },
   /*  methods:{
        filtered(){
           const dataFiltered = "http://localhost/esercizi%20boolean/php-ajax-dischi/version-vue/database/filter-database.php";
           axios
           .get(dataFiltered, {
               query: ""
           })
           .then (result =>{
               console.log(result.data);
           })
        }
    } */
})