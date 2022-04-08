import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {Pie,PieChart,ResponsiveContainer,Tooltip,Legend} from "recharts";

function PChartPeople(){

    const [peopleList, setPeopleList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/selectAllPeople").then((res) => {
            setPeopleList(res.data);
            // console.log(res.data);
        });
    }, []); 

    return(
        <div>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <PieChart width={250} height={250}>
                    <Pie  data={peopleList} dataKey="Category" outerRadius={100} fill="#FF69B4" />
                    {/* <Tooltip />
                    <Legend /> */}
                </PieChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
}


export default PChartPeople;

