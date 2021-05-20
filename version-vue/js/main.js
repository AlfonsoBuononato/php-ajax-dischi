const app = new Vue({
    el:"#app",
    data:{
        img: "./img/logo.png",
        dischi:[]
    },
    created(){
        const dataURL= "http://localhost/php-ajax-dischi/version-vue/database/database.php";
        axios
        .get(dataURL)
        .then(result => {
            console.log(result.data);
            this.dischi = result.data
        })
        .catch(err => {
            console.log(err);
        })
    }
})