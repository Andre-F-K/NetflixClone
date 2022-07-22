
window.addEventListener('load', () => {

    // const moviesArr = []
    // // get json from moviesJSON.json
    // fetch('moviesJSON.json').then((response)=>{
    //     return response.json();
    // }).then((obj)=>{

    //     // console.log(obj)
    //     moviesArr.push(obj)
    //     console.log(moviesArr[0])
    // })




    //get user name from login
    let getJson = localStorage.getItem('userName')
    let UserObj = JSON.parse(getJson)
    //


    const { createApp } = window.Vue

    const userComponent = ({

        data() {
            return {
                userName: UserObj.name,
                movies: [
                    {movieName: 'sas',thumbnail: 'images/large-movie1.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Lucifer',thumbnail: 'images/large-movie2.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Haunted',thumbnail: 'images/large-movie3.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: "Who Killed Sam",thumbnail: 'images/large-movie4.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Raging Bull',thumbnail: 'images/large-movie5.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Elite ',thumbnail: 'images/large-movie6.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Transformers',thumbnail: 'images/large-movie7.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Umbrella Academy',thumbnail: 'images/large-movie8.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'rer',thumbnail: 'images/large-movie1.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'ddd',thumbnail: 'images/large-movie2.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'ssss',thumbnail: 'images/large-movie3.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'uyu',thumbnail: 'images/large-movie4.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'pop',thumbnail: 'images/large-movie5.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Elite',thumbnail: 'images/large-movie6.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Transformers',thumbnail: 'images/large-movie7.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Umbrella Academy ',thumbnail: 'images/large-movie8.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Luis Miguel',thumbnail: 'images/large-movie1.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'Lucifer',thumbnail: 'images/large-movie2.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'aasd',thumbnail: 'images/large-movie3.jpg',preview: 'https://www.youtube.com/watch?v=iik25wqIuFo',ComingSoon: true, Genre: "Action, Crime, Drama"},
                    {movieName: 'ioio',thumbnail: 'images/large-movie4.jpg',preview: 'https://www.youtube.com/watch?v=5PSNL1qE6VY',ComingSoon: true, Genre: "Action, Crime, Drama"},
                            ]


            }
        },


        methods: {
            addWatchList(name){
                
                console.log(name)
                let movieSelec = null
                this.movies.forEach(element => {
                    if (element.movieName == name) {
                       movieSelec = element
                    }       
                });
                console.log(movieSelec)
                let watchListArr = []

                // watchListArr.push(movieSelec)

                

                console.log(watchListArr)
                console.log(localStorage.getItem('watchMovie'))
                if (!localStorage.getItem('watchMovie') ) {

                    
                    localStorage.setItem('watchMovie',JSON.stringify(watchListArr))
                }else{
                   let localStorageArr = localStorage.getItem('watchMovie')

                   localStorage.setItem('watchMovie', JSON.stringify(watchListArr))
                       
                }
                
            },

            
        },

        computed: {
        }
    })


    const app = createApp(userComponent)
    app.mount('#netflixApp')
})
