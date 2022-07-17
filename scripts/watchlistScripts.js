window.addEventListener('load', () => {

    let getJson = localStorage.getItem('userName')
    let moviesJson = 'https://project-apis.codespace.co.za/api/list'
    console.log(moviesJson)

    let x = $.getJson(moviesJson, (movies) => {
        console.log(movies)
    })

    let UserObj = JSON.parse(getJson)
    console.log(typeof (UserObj))
    console.log(UserObj)
    const { createApp } = window.Vue

    const userComponent = ({

        data() {
            return {
                userName: UserObj.name,

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