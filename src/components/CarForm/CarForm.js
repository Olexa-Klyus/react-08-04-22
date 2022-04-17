import {useForm} from "react-hook-form";

import {carService} from "../../services";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();

    // useForm формує готовий обєкт із зареєстрованих полів і поміщає його в data
    const mySubmit = async (car) => {
        const {data}= await carService.create(car);
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>

            {/*можна зробити вкладене поле обєкта - */}
            {/*<div><label>Price: <input type="text" {...register('price.new', {valueAsNumber: true})}/></label></div>*/}
            {/*<div><label>Old Price: <input type="text" {...register('price.old', {valueAsNumber: true})}/></label></div>*/}

            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            <button>save</button>
        </form>
    );
};

export {CarForm};