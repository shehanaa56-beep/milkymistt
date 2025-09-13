import React from "react";

export default function Timeline() {
  const timelineData = [
    {
      year: "1985",
      ago: "39 YEARS AGO",
      text: "Beginning as Milk Trading Company",
      side: "right",
    },
    {
      year: "1994",
      ago: "30 YEARS AGO",
      text: "Paneer Production",
      side: "left",
    },
    {
      year: "1997",
      ago: "27 YEARS AGO",
      text: "Milky Mist Brand Name Born",
      side: "right",
    },
    {
      year: "2007",
      ago: "17 YEARS AGO",
      text: "Expansion into Wider Dairy Products",
      side: "left",
    },
    {
      year: "2008",
      ago: "16 YEARS AGO",
      text: "Strengthening Cold Storage, Logistics, and Distribution network in South India",
      side: "right",
    },
    {
      year: "2009",
      ago: "15 YEARS AGO",
      text: "Launch of Diversified Value-Added Products: Curd, Cheese",
      side: "left",
    },
    {
      year: "2010",
      ago: "14 YEARS AGO",
      text: "First TV Commercial launched for Milky Mist Paneer, reaching millions of households in South India",
      side: "right",
    },
    {
      year: "2011",
      ago: "13 YEARS AGO",
      text: "Paneer Production touched 3 Metric Ton/day. Added Curd, Yogurt, and Cheese.",
      side: "left",
    },
    {
      year: "2012",
      ago: "12 YEARS AGO",
      text: "Started providing VisiCoolers to retail partners to increase shelf share. Achieved ₹48 Cr turnover for first time.",
      side: "right",
    },
    {
      year: "2016",
      ago: "8 YEARS AGO",
      text: "Mega Plant conceptualized and project kick-off.",
      side: "left",
    },
    {
      year: "2017",
      ago: "7 YEARS AGO",
      text: "100 MT Powder Plant commissioned – Whey & Skimmed Milk Powder products launched.",
      side: "right",
    },
    {
      year: "2018",
      ago: "6 YEARS AGO",
      text: "Fully automated robotic Paneer & Curd process and packaging line commissioned in Milky Mist mega plant.",
      side: "left",
    },
    {
      year: "2019",
      ago: "5 YEARS AGO",
      text: "Expansion into new product lines and infrastructure development.",
      side: "right",
    },
    {
      year: "2022",
      ago: "2 YEARS AGO",
      text: `MilkyMist: Butter Chiplet, Greek Yogurt, Skyr, Sour Curd, Cheese Tin
SmartChef: Rasamalai, Paneer Fingers, Dahi Tikki, Cheese Balls
Misty Lite: UHT Buttermilk, Gulab Jamun, Rasagulla, Fat Spread
Acquisition of Asal brands.`,
      side: "left",
    },
    {
      year: "2023",
      ago: "1 YEAR AGO",
      text: "Launch of Ice Cream and Capella Chocolate.",
      side: "right",
    },
  ];

  return (
    <section className="timeline">
      {timelineData.map((item, index) => (
        <div key={index} className={`timeline-item ${item.side}`}>
          <div className="timeline-content">
            <h4>{item.year}</h4>
            <p className="ago">{item.ago}</p>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
