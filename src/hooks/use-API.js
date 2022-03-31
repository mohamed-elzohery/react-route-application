import React, {useState, useEffect} from "react";

const useAPI = (sendReq, args) => {
    const [data, setData] = useState([]);
    const [isFinished, setIsFinished] = useState(false);


    useEffect(() => {
        sendReq(...args).then(res => {
            setData(res.data);
            setIsFinished(true);
        }).catch(err => {
            setData(null);
            setIsFinished(false);
        });
        
    },[sendReq, setData, setIsFinished]);

    return {
        data,isFinished
    }
}

export default useAPI;