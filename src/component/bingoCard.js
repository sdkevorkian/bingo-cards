import React, {useState} from 'react';
import { generateBingoCard } from '../utils/bingo';
import Button from '../styles/buttonStyles';
import styled from 'styled-components';

const Card = styled.div`
    text-align: center;
    border:1px solid var(--brown);
    .col-2 {
        padding: 0;
    }
    .bingoSpace {
        padding: 1em;
        background: white;
        border: 1px solid var(--brown);
        min-height: 82px;
    }
    .bingoNumber{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bingoHeader {
        background: var(--cream);
        color: white;
        border-left: 0;
        border-right: 0;
        font-family: 'Luckiest Guy', cursive;
        font-size: 1.75em;        
    }
    .bingoCol:first-child .bingoHeader{
        border-left: 1px solid var(--brown);
    }
    .bingoCol:last-child .bingoHeader{
        border-right: 1px solid var(--brown);
    }
    .bingoCol:nth-child(2) .bingoHeader .letter{
        background-color: var(--gold);
    }
    .bingoCol:nth-child(3) .bingoHeader .letter{
        background-color: var(--teal);
    }
    .bingoCol:nth-child(4) .bingoHeader .letter{
        background-color: var(--brown);
    }
    .letter {
        background-color: var(--orange);
        border-radius: 50%;
        height: 2em; 
        width: 2em;
        display: inline-block;
        padding-left: 0.45em;
        margin-right: 0.45em;
        padding-top: 0.05em;
        box-shadow: -3px 3px 3px 0px #AAA;
    }
    .active {
        display: inline-block;
        height: 3em;
        width: 3em;
        background-color: var(--dabber);
        color: var(--cream);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default function BingoCard(){
    const initialCard = generateBingoCard();
    const [bingoCardGrid, setBingoCardGrid] = useState(initialCard);
    const [dabberColor, setDabberColorGrid] = useState('#800000');

    function newCard (){
        setBingoCardGrid(generateBingoCard())
    }

    return(
        <div className="col no-gutters">
            <Card className="bingo-card row row-cols-2 col-10 offset-1 no-gutters">
                {
                    Object.keys(bingoCardGrid).map(key => (
                        <div className="col bingoCol" key={key + 'row'}>
                            <div className="bingoHeader bingoSpace"><span className="letter">{key}</span></div>
                            {
                            bingoCardGrid[key].map((space,i)=> 
                                <div className="bingoNumber bingoSpace" key={key+'-'+i}>
                                    <span className={space.active ? 'active' : ''}>{space.number}</span>
                                </div>)
                            }
                        </div>
                    ))
                }
            </Card>
            <Button className="btn btn-primary" onClick={newCard}>Generate New Card</Button>
        </div>
    )
}