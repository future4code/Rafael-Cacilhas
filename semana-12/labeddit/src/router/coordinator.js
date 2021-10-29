export const gotoLogin = (history) => {
    history.push('/login')
}

export const gotoCadastro = (history) => {
    history.push('/cadastro')
}

export const gotoFeed = (history) => {
    history.push('/')
}

export const gotoPost = (history,postEscolhido) => {
    history.push(`/post/${postEscolhido.id}`)
}