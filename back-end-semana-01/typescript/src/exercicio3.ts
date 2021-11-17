type postagens = {
    autor:  string,
    texto:  string
}

function buscarPostsPorAutor(   posts: Array<postagens> , autorInformado: string) {
    return posts.filter(
        (post) => {
        return post.autor === autorInformado
        }
    )
}

const posts: Array<postagens> = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

