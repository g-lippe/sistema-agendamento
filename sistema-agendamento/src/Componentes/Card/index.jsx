import React from "react";
import { useState } from "react";


export default function Card() {

    // Array com a tabela principal
    const [usuario, setUsuario] = useState('Caio');  

    const clients = [
        {nome : 'João', cidade : 'Varzea'},
        {nome : 'Maria', cidade : 'Jundiai'},
        {nome : 'Marcelo', cidade : 'São Paulo'},
        {nome : 'Tereza', cidade : 'Cabreuva'},
    ]


    function mudarNome () {
        setUsuario('Maria')
        console.log(usuario)
    }

    var listaClientes = clients.map((cliente) => 
        
        <div>
            <h3>{cliente.nome}</h3>
            <p>Cidade: <span>{cliente.cidade}</span></p>
        </div>
    )

  return ( 
    <div>
        <p>Hello World</p>

        <h3>Olá, bem vindo {usuario}, como foi seu dia hoje?</h3>
        
        {listaClientes}

        <button onClick={(evento) => mudarNome()}>Mudar Nome</button>
    </div>
)}