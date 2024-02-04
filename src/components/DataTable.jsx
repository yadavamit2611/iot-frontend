import { useEffect, useState } from "react";
import { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } from "../constants";
import { createClient } from "@supabase/supabase-js";

function DataTable() {
  const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);
  const [readings, setReadings] = useState([]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      getReadings();
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  const ReadingData = ({ id, sensor, value, created_at }) => {
    const dateObject = new Date(created_at);
    const formattedDateTime = dateObject.toLocaleString();
    return (
      <tr key={id}>
        <td>{sensor}</td>
        <td>{value}</td>
        <td>{formattedDateTime}</td>
      </tr>
    );
  };
  async function getReadings() {
    const { data, error } = await supabase
      .from("readings")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(4);
    console.log(data, error);
    setReadings(data);
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center"> Sensor Readings</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Sensor</th>
              <th>Values</th>
              <th>Date, Time</th>
            </tr>
          </thead>
          <tbody>
            {readings.map((reading) => (
              <ReadingData {...reading} key={reading.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
