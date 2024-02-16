import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export const MyMeals = ( {text, updatingInInput, deleteMeal} )=>{
    return(
        <div>
            <div> 
                <p> {text} </p>
            </div>

            <div>
            <FiEdit onClick={updatingInInput} />
            <MdDeleteOutline onClick={deleteMeal} />
            </div>
        </div>
    )
}