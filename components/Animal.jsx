const React = require('react')

function Animal ({animal}){
return(
    <div className='animalCard'>
        <div className='animalImg'>
            {animal.Img.map(el) => <img src={el.url} />}
        </div>
        <h2>{animal.name}</h2>
        <h3>{animal.description}</h3>
    </div>

)
}

module.exports = Animal