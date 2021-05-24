<main>
    <label for="select">
        <select name="select" v-model="query" @change="filtered" >
            <option value="all">all</option>
            <option :value="gen" v-for="gen in genere">{{gen}}</option>
        </select>
    </label>
    <div class="container content">
        <div class="box" v-for="disco in dischi">
            <ul>
                <li><img :src="disco.poster" alt=""></li>
                <li>{{disco.title}}</li>
                <li>{{disco.author}}</li>
                <li>{{disco.year}}</li>
                <li>{{disco.genre}}</li>
            </ul>
        </div>
    </div>
</main>