import React from 'react'

export default class Mensagens extends React.Component {

    state={
        mensagens: [
            "Oi",
            "Tudo bem?",
            "Como vai?",
            "Alo"
        ]
    };

    renderizaMensagens = () => {

        return this.state.mensagens.map( item => {
            return <p>-{item}</p>;
        });

    };

    render() {
        return (
            <div>
                <h3>Mensagens</h3>
                
                {this.state.mensagens.length > 0 ? (
                    <div>
                        <h4>Você possui {this.state.mensagens.length} mensagens:</h4>
                        {this.renderizaMensagens()}
                    </div>
                ):( 
                    <h4>Você não possui novas mensagens</h4>
                )} 


                
            </div>
        )
    }
}