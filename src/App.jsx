import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Card } from './components/Card'
import Modal, { ModalBody, ModalHeader } from './components/Modal'

import logo from './imagens/logo.png'
import banner from './imagens/banner.jpg'
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'

import styles from './styles.module.css'
import './styles/global.css'
// npm install
// npm run start

const requisicao = [
    {
        "id": 1,
        "titulo": "Missão Impossível 2",
        "imagem": card1
    },
    {
        "id": 2,
        "titulo": "Missão Impossível 3",
        "imagem": card2
    },
    {
        "id": 3,
        "titulo": "Missão Impossível 4",
        "imagem": card3
    },
    {
        "id": 4,
        "titulo": "Missão Impossível 5",
        "imagem": card4
    },
]


// https://github.com/profchines
function App() {

    return (
        <>
            <Header />

            <img style={{
                width: "15%",
                margin: "20px",
                cursor: 'pointer'
            }} src={logo} />
            <img width="100%" src={banner} />
            <h1
                style={{
                    margin: 15,
                    textAlign: 'center',
                }}
            >Filmes</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}
            >
                {
                    requisicao.map((filme) => {
                        return (
                            <Card
                                key={filme.id}
                                imagem={filme.imagem}
                                titulo={filme.titulo}
                            />

                        )
                    })
                }
            </div>
            <Modal>
                <ModalHeader>
                    <h2>Chabes</h2>
                </ModalHeader>
                <ModalBody>
                    <p style={{ fontSize: '0.8rem', marginBottom: 10 }}>07/05/2001</p>
                    <div style={{ display: 'flex', marginBottom: 10 }}>
                        <p style={{ fontSize: '0.8rem', color: '#b3b3b3' }}>Direção</p>
                        <p style={{ fontSize: '0.8rem' }}>Seu Madrugs</p>
                    </div>
                </ModalBody>
            </Modal>

            <Footer />
        </>
    );
}

export default App;
