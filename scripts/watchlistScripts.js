window.addEventListener('load', () => {

    let getJson = localStorage.getItem('userName')
    let UserObj = JSON.parse(getJson)
    // console.log(UserObj)
    // console.log(typeof (UserObj))
    // console.log(UserObj)


    const { createApp } = window.Vue

    const userComponent = ({

        data() {
            return {
                userName: UserObj.name,
                movies: []
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