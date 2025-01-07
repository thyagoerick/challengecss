import style from './CarDetails.module.css'




const CarDetails = ({ cars }) => {


    // "marca":"Volkswagen", 
    // "carName":"Polo", 
    // "price": 94290, 

    return (
        <div className={style.main}>
            <nav>
             <img className={style.logo} src="./car-list-logo.png" alt="Logo CarList"/>
            </nav>
            {
                cars.map(car => (
                <div key={car.id} className={style.card}>
                   <span className={style.frame}>
                        <img src={car.img} alt={`Carro ${car.marca} ${car.carName}`} title={`${car.marca} ${car.carName}`}/>
                   </span>    
                   <div className={style.footer}>
                        <p>{car.carName}</p>
                        <p>{car.marca}</p>
                        <p>{car.price.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</p>
                   </div>
                </div>                        

                ))
            }
        </div>
    )
}

export default CarDetails