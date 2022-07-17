  window.addEventListener('load', ()=>{

    const moviesArr = []
    // get json from moviesJSON.json
    fetch('moviesJSON.json').then((response)=>{
        return response.json();
    }).then((obj)=>{
       
        // console.log(obj)
        moviesArr.push(obj)
        console.log(moviesArr[0])
    })
    
    

    //get user name from login
    let getJson = localStorage.getItem('userName')
    let UserObj = JSON.parse(getJson)    
    //
    

    const { createApp } = window.Vue

const userComponent = ({
    
    data() {
        return {
            userName: UserObj.name ,
            movieName: "",
            movieImg: "",
            movieGenre: "",
            moviesArray: "moviesArr[0]",

        }
    },


    methods: {
        
    }
})


const app = createApp(userComponent)
app.mount('#netflixApp')
})
