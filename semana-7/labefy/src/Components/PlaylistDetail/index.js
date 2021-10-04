import React from "react";
import styled from "styled-components";
import CardMusica from "../CardMusica/index";


const PlaylistsContainer = styled.div`
    margin-top:       2vh;
    height:           60vh;
    display:          flex;
    flex-direction:   column;
    align-items:      center;

`

const TrackCreationForm = styled.form`
    display:            flex;
    flex-direction:     row;
    width:              90vw;
    align-items:        center;
    height:             10%;
    justify-content:    space-around;

    div{
        display:        flex;
        flex-direction: column;
        align-items:    center;
    }

`

const Tracks = styled.div`
`

class PlaylistDetail extends React.Component {

    state ={
        tracks:[
            {
                "id":"23",
                "name":"Is This Love",
                "artist":"Bob Marley",
                "url":"www.url.com.br",
            },
            {
                "id":"393",
                "name":"Three Little Birds",
                "artist":"Bob Marley",
                "url":"www.threelittlebirds.com.br",
            }
        ]
    }



    render(){

        const tracks = this.state.tracks.map( (item) => {
            return <CardMusica id={item.id} name={item.name} artist={item.artist} url={item.url}/>
        })

        return(

            <PlaylistsContainer>
                <h2>Playlist 1</h2>
                <p> x músicas na playlist </p>

                <TrackCreationForm >
                    <div>
                        <label>Nome da música</label>
                        <input />
                    </div>

                    <div>
                        <label>Artista</label>
                        <input />
                    </div>

                    <div>
                        <label>URL</label>
                        <input />
                    </div>
                </TrackCreationForm>
                <button type="submit">Adicionar música </button>

                {tracks}




                <button onClick={() => this.props.changePage("playlists")}>Voltar </button> 
            </PlaylistsContainer>
        );
};

};

export default PlaylistDetail