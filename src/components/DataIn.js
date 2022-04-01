import { useParams } from "react-router-dom";

const DataIn = (props) => {
    const {data, color, bgCol} = useParams();
    
    return(
        <div>
            {
                isNaN(data) ?
                <p style={
                    color?
                    {color: color, backgroundColor: bgCol}
                    : null
                }>
                    The word is: {data}
                </p>
                : 
                <p>
                    The number is: {data}
                </p>
            }
        </div>

    )
}

export default DataIn;