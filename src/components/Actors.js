import Actor from "./Actor";

const Actors = () => {

    const actorsArr = [{
        id: 1,
        name: 'Tom',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIxNOzCSR_HnptRGmL8-E2JrxLrATpgS8tw&usqp=CAU'
    },
        {
            id: 2,
            name: 'jerry',
            img: 'https://w7.pngwing.com/pngs/222/493/png-transparent-jerry-mouse-tom-cat-tom-and-jerry-actor-celebrities-mammal-heroes.png'
        }]

    return (
        <div>
            <div>
                <h1>Tom</h1>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIxNOzCSR_HnptRGmL8-E2JrxLrATpgS8tw&usqp=CAU'}
                    alt={'Tom'}/>
            </div>

            <Actor/>
            <div>
                <h1>Jerry</h1>
                <img
                    src={'https://w7.pngwing.com/pngs/222/493/png-transparent-jerry-mouse-tom-cat-tom-and-jerry-actor-celebrities-mammal-heroes.png'}
                    alt={'Jerry'}/>
            </div>

            {/*або можнна так передати дані в props компоненти Actor і викликати компоненту яка відпрацює як функція*/}
            <Actor name={actorsArr[0].name}
                   img={actorsArr[0].img}/>
            <Actor name={actorsArr[1].name}
                   img={actorsArr[1].img}/>

            {/*або ввести key промапити масив*/}
            {actorsArr.map(value => <Actor key={value.id} name={value.name} img={value.img}/>)}

        </div>
    );
};

export default Actors;