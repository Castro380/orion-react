import React from 'react'
import Pagina from '../componentes/Pagina'

const objeto = () => {

    const carros = [

    {marca: 'chevrolet', modelo:'Opala', ano: 1971, cor:'azul', foto:'data:image/jpeg;base64,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'},
    {marca: 'chevrolet', modelo:'Classic', ano: 2012, cor:'prata', foto:'https://img-us-2.trovit.com/img2br/Vm1I7191ZP7/Vm1I7191ZP7.1_11.jpg'},
    {marca: 'Ford', modelo:'Ka', ano: 2005, cor:'Branco', foto:'data:image/jpeg;base64,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'},
    {marca: 'chevrolet', modelo:'Omega', ano: 2000, cor:'preto', foto:'data:image/jpeg;base64,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'},
    {marca: 'VW', modelo:'Fuscão', ano: 1947, cor:'verde', foto:'https://i.pinimg.com/originals/3c/d9/d9/3cd9d924dd953d2de29bcc3b52c246ac.jpg'},
    ]

    const carro = {marca: 'chevrolet', modelo:'Opala', ano: '1971', cor:'azul', foto:''}

  return (
    <>
    <Pagina título="Objetos">
        {carros.map(item => (
            <div>
                <h1>{item.marca} - {item.modelo}</h1>
                <p>Ano: {item.ano}</p>
                <p>Cor: {item.cor}</p>
                <img src={item.foto} alt={item.modelo}/>
                <hr />
            </div>
            
        ))}
        
    </Pagina>

    </>
  )
}

export default objeto