const Actor = ({name,img}) => {

    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
        </div>
    );
};

export default Actor;