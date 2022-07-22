window.addEventListener('load', () => {

    let getJson = localStorage.getItem('userName')
    let UserObj = JSON.parse(getJson)
    let watchMovieJson = localStorage.getItem('watchMovie')
    let watchMovieObj = JSON.parse(watchMovieJson)
    console.log(watchMovieObj)
    const { createApp } = window.Vue

    const userComponent = ({

        data() {
            return {
                userName: UserObj.name,
                movies: watchMovieObj
            }
        },


        methods: {

            remove(name){
                
                console.log(name)
                let movieSelec = null
                this.movies.forEach(element => {
                    if (element.movieName == name) {
                       movieSelec = element
                       let x = watchMovieObj.splice(movieSelec)
                       this.movies = x
                       console.log(x)
                       
                    }       
                });
            }

            


        }
    })


    const app = createApp(userComponent)
    app.mount('#watchListApp')
})



window.addEventListener('load', (event) => {

});