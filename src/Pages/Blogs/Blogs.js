import React, { useEffect } from "react";
import "./Blogs.css";
import { useState } from "react";

const Blogs = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
        await fetch("https://coronavirus.m.pipedream.net/")
        .then((res) => res.json())
        .then((data) => setUpdates(data.rawData))
        .finally(setLoading(false)) 
    } 
    getData()
    // setLoading(false)
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h6 className="text-red-700">Corona Update Worldwide</h6> 

        <div class="flex items-center justify-center space-x-2 animate-bounce">
          <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
          <div class="w-8 h-8 bg-green-400 rounded-full"></div>
          <div class="w-8 h-8 bg-black rounded-full"></div>
          <h5>LOADING...</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="blogs-container">
      <br />
      <h1 className="text-red-700 font-bold text-2xl">COVID-19 Update Worldwide </h1>
      <p><small>source: <span className="text-black-200 font-bold">https://coronavirus.m.pipedream.net/</span></small></p>
      <br />
      <hr />
      <hr />
      <div className="blogs">
        {updates.map((update) => (
          <Update key={update.Combined_Key} update={update}></Update>
        ))}
      </div>
    </div>
  );
};

const Update = (props) => {
  const { update } = props;
  const changedIR = parseFloat(update.Incident_Rate).toFixed(2);
  return (
    <div className="blog">
      <p className="blog-details">
        Country: <span>{update.Combined_Key}</span>
      </p>
      <p className="blog-details">
        Affected: <span>{update.Confirmed}</span>
      </p>
      <p className="blog-details">
        Death: <span>{update.Deaths}</span>
      </p>
      <p className="blog-details">
        Incident Rate: <span>{changedIR}</span>
      </p>
      <p className="blog-details">
        Last Update: <span>{update.Last_Update}</span>
      </p>
    </div>
  );
};

export default Blogs;
