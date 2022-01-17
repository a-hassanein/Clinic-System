import React from "react";

import CardPackages from "./CardPackages";
import NavBar from "./NavBar";
import "./Packages.css";

function Packages() {
  const packages = [
    {
      title: "TRIAL",
      Subtitle: "FREE",
      list0: "Lorem Ipsum is simply dummy text",
      list1: "Lorem Ipsum is simply dummy text",
      list2: "Lorem Ipsum is simply dummy text",
    },
    {
      title: "SILVER",
      Subtitle: 150,
      coin: 'EGP',
      per: ' /MONTH',
      list0: "Lorem Ipsum is simply dummy text",
      list1: "Lorem Ipsum is simply dummy text",
      list2: "Lorem Ipsum is simply dummy text",
    },
    {
      title: "GOLD",
      Subtitle: 300,
      coin: 'EGP',
      per: ' /MONTH',
      list0: "Lorem Ipsum is simply dummy text",
      list1: "Lorem Ipsum is simply dummy text",
      list2: "Lorem Ipsum is simply dummy text",
    },
    {
      title: "DIAMOND",
      Subtitle: 2500,
      coin: 'EGP',
      per: ' /YEAR',
      list0: "Lorem Ipsum is simply dummy text",
      list1: "Lorem Ipsum is simply dummy text",
      list2: "Lorem Ipsum is simply dummy text",
    },
  ];
  return (
    <div className="Body__Packages">
      <br />
      <h2 className="Packages__heading">OUR PACKAGES</h2>
      <br />
      <p className="Packages__p">
        Our custom built 24/7 servers and experts deliver incredible performance
        that grows with your business.
      </p>
      <br />
      <br/>
      <br/>
      <br/>
      <div className="d-flex justify-content-evenly ">
      
     
     
        <CardPackages
          title={packages[0].title}
          Subtitle={packages[0].Subtitle}
          list0={packages[0].list0}
          list1={packages[0].list1}
          list2={packages[0].list2}
        />
       
       
        <CardPackages 
          title={packages[1].title}
          Subtitle={packages[1].Subtitle}
          coin={packages[1].coin}
          per={packages[1].per}
          list0={packages[1].list0}
          list1={packages[1].list1}
          list2={packages[1].list2}
        />
      
        <CardPackages
          title={packages[2].title}
          Subtitle={packages[2].Subtitle}
          coin={packages[2].coin}
          per={packages[2].per}
          list0={packages[2].list0}
          list1={packages[2].list1}
          list2={packages[2].list2}
        />
       
        <CardPackages
          title={packages[3].title}
          Subtitle={packages[3].Subtitle}
          coin={packages[3].coin}
          per={packages[3].per}
          list0={packages[3].list0}
          list1={packages[3].list1}
          list2={packages[3].list2}
        />
       
      </div>
    </div>
  );
}

export default Packages;
