import { useEffect, useState } from "react";
import bill from "./assets/bill.webp";
import dipper from "./assets/dipper.webp";
import ford from "./assets/ford.png";
import gideon from "./assets/gideon.webp";
import mabel from "./assets/mabel.webp";
import robbie from "./assets/robbie.webp";
import soos from "./assets/soos.webp";
import stan from "./assets/stan.webp";
import waddles from "./assets/waddles.webp";
import wendy from "./assets/wendy.webp";

const images = [
  { id: 1, src: bill, name: "Bill" },
  { id: 2, src: dipper, name: "Dipper" },
  { id: 3, src: ford, name: "Ford" },
  { id: 4, src: gideon, name: "Gideon" },
  { id: 5, src: mabel, name: "Mabel" },
  { id: 6, src: robbie, name: "Robbie" },
  { id: 7, src: soos, name: "Soos" },
  { id: 8, src: stan, name: "Stan" },
  { id: 9, src: waddles, name: "Waddles" },
  { id: 10, src: wendy, name: "Wendy" },
];

function Picture() {
    const [bestscore , setBestScore] = useState(0)
    const [clickedis, setClickedIs] = useState([])
    const [deck, setDeck] = useState([...images])
    const [score, setScore] = useState(0)


    function shuffle(arrray){
        for(let i = arrray.length - 1; i > 0;i --){
            const j = Math.floor(Math.random() * (i + 1));
            [arrray[i], arrray[j]] = [arrray[j], arrray[i]];
        }
        return arrray;
    }

    function handleclick(id){
        if(clickedis.includes(id)){
            setScore(0);
            setClickedIs([]);
        }else{
            setClickedIs((prev) => [...prev, id]);
             setScore(prev => {
                const newScore = prev + 1
                setBestScore(best => Math.max(best, newScore))
                return newScore;

             });
           
        }
        setDeck(shuffle([...deck]))
        
        
    }
    useEffect(() =>{
        if (bestscore === 10){
        
        setBestScore(0)
        setClickedIs([])
        setDeck(shuffle([...deck]))
        return(<>
        <div className="fixed">
            <h1>You win</h1>
        </div>
        </>)
        }
    }, [bestscore])


  return (
    <>
    <div className="flex">
        <h1>Remeber Game</h1>
        <div>
            <p>Score: {score}</p>
            <p>Best Score: {bestscore}</p>
        </div>
        
    </div>

    <div className="grid">
        {deck.map((img) => (
        <div key={img.id}>
          <img src={img.src} alt={img.name} onClick={() => handleclick(img.id)} />
          <p>{img.name} – ID: {img.id}</p>
        </div>
      ))}
    </div>
    <hr/>


    </>
  );
}

export default Picture;
