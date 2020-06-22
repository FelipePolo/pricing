import React, { useState } from "react";
import "./app.scss";
import Header from "./components/header";
import Card from "./components/card";

const datos = [
  [
    {
      key:1,
      title: "Basic",
      money: "199.99",
      plan1: "500 GB Storage",
      plan2: "2 Users Allowed",
      plan3: "Aend Up To 3 GB",
    },
    {
      key:2,
      title: "Professional",
      money: "249.99",
      plan1: "1 TB Storage",
      plan2: "5 Users Allowed",
      plan3: "Aend Up To 10 GB",
    },
    {
      key:3,
      title: "Master",
      money: "399.99",
      plan1: "2 TB Storage",
      plan2: "10 Users Allowed",
      plan3: "Aend Up To 20 GB",
    },
  ],
  [
    {
      key:1,
      title: "Basic",
      money: "19.99",
      plan1: "500 GB Storage",
      plan2: "2 Users Allowed",
      plan3: "Aend Up To 3 GB",
    },
    {
      key:2,
      title: "Professional",
      money: "24.99",
      plan1: "1 TB Storage",
      plan2: "5 Users Allowed",
      plan3: "Aend Up To 10 GB",
    },
    {
      key:3,
      title: "Master",
      money: "39.99",
      plan1: "2 TB Storage",
      plan2: "10 Users Allowed",
      plan3: "Aend Up To 20 GB",
    },
  ],
];

export default function App() {
  const [index, setindex] = useState(0);
  const handleclick = () => {
    if(index === 0){
      setindex(1)
    }else{
      setindex(0)
    }
  }
  return (
    <>
      <Header click={handleclick}></Header>
      {
        datos[index].map((x) => (
          <Card
            key = {x.key}
            title={x.title}
            money={x.money}
            plan1={x.plan1}
            plan2={x.plan2}
            plan3={x.plan3}
          ></Card>
        ))
      }
    </>
  );
}
