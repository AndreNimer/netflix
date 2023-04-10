const API_KEY = "34a63c92cb017919907c85fff1fa1970"
const API_DNS = "https://api.themoviedb.org/3/"

const categorias = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending/all/week?api_key="+API_KEY+"&language=pt-BR"
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: "/discover/tv/api_key="+API_KEY+"&with_genres=99"
    }
]

const filmes = (category) => {
    let url = ''

    categorias.forEach((item)=>{
        if(item.name == category){
            url = API_DNS + item.path
        }
    })

    return url; 
}

export default filmes;