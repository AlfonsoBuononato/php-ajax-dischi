const app = new Vue({
    el:"#app",
    data:{
        img: "./img/logo.png",
        dischi: [],
        genere: [],
        filtraggio: [],
        query: "all"
    },
    created(){
        const dataURL= "http://localhost/esercizi%20boolean/php-ajax-dischi/version-vue/database/database-json.php?query=";
        axios
        .get(dataURL)
        .then(result => {
            this.dischi = result.data.database_filtered;
            this.genere = result.data.genere;
        })
        .catch(err => {
            console.log(err);
        });
    },
    methods:{
        filtered(){
            const dataURL= "http://localhost/esercizi%20boolean/php-ajax-dischi/version-vue/database/database-json.php";
            axios
            .get(dataURL, {
                params:{
                    query: this.query,
                }
            })
            .then(result => {
                console.log(this.query);
                this.dischi = result.data.database_filtered;
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
})