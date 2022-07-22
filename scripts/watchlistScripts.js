window.addEventListener('load', () => {

    let getJson = localStorage.getItem('userName')
    let UserObj = JSON.parse(getJson)
    let watchListDisplay = localStorage.getItem('watchMovie')
    console.log(watchListDisplay)
    // console.log(typeof (UserObj))
    // console.log(UserObj)


    const { createApp } = window.Vue

    const userComponent = ({

        data() {
            return {
                userName: UserObj.name,
                movies: [watchListDisplay]
            }
        },


        methods: {
            
        }
    })


    const app = createApp(userComponent)
    app.mount('#watchListApp')
})



window.addEventListener('load', (event) => {

});