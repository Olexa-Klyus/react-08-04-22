import './App.css';
import Actor from "./components/Actor";
import Users from "./components/Users";

function App() {

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
            //----------------------------------------------------

            <Users/>

            //----------------------------------------------------

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

            <Actor name={actorsArr[0].name}
                   img={'https://w7.pngwing.com/pngs/222/493/png-transparent-jerry-mouse-tom-cat-tom-and-jerry-actor-celebrities-mammal-heroes.png'}/>

            {actorsArr.map(value => <Actor key={value.id} name={value.name} img={value.img}/>)}

        </div>)
}

export default App;
