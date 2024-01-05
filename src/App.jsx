import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./App.css";
import { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } from "./constants";

const supabase = createClient(VITE_SUPABASE_URL,VITE_SUPABASE_ANON_KEY);
function App() {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    setInterval(() => {
      getReadings();
    },2000);
  }, []);

  const ReadingData = ({id,sensor,value,created_at}) => {
    return (<tr>
        {/* <td>{id}</td> */}
        <td>{sensor}</td>
        <td>{value}</td>
        <td>{created_at}</td>
    </tr>)
  }

  async function getReadings() {
    console.log(supabase);
    const { data,error } = await supabase.from("readings").select("*");
    console.log(data,error);
    setReadings(data);
  }

  return (
    <>
    <h1>Realtime sensor readings</h1>
      <table>
        <tr>
        <th>Sensor</th>
        <th>Values</th>
        <th>time</th>
        </tr>
      {readings.map((reading) => (
        <ReadingData {...reading} key={reading.id}></ReadingData>
      ))}
      </table>
      
    </>  
  );
}

export default App;