import React, {useState} from 'react';
import { generateBingoCard } from '../utils/bingo';
import Button from '../styles/buttonStyles';
import styled from 'styled-components';

const Card = styled.div`
    text-align: center;
    .col-2 {
        padding: 0;
    }
    .bingoSpace {
        padding: 1em;
        background: white;
        border: 1px solid var(--brown);
    }
    .bingoHeader {
        background: var(--orange);
        color: var(--cream);
        border-left: 0;
        border-right: 0;
    }
    .bingoCol:first-child .bingoHeader{
        border-left: 1px solid var(--brown);
    }
    .bingoCol:last-child .bingoHeader{
        border-right: 1px solid var(--brown);
    }
    .btn-primary {
        background: var(--gold);
      }
`;

export default function BingoCard(){
    const initialCard = generateBingoCard();
    const [bingoCardGrid, setBingoCardGrid] = useState(initialCard)

    function newCard (){
        setBingoCardGrid(generateBingoCard())
    }

    return(
        <div className="col">
            <Card className="bingo-card row offset-2">
                {
                    Object.keys(bingoCardGrid).map(key => (
                        <div className="col-2 bingoCol" key={key + 'row'}>
                            <div className="bingoHeader bingoSpace">{key}</div>
                            {
                            bingoCardGrid[key].map((number,i)=> <div className="bingoNumber bingoSpace" key={key+'-'+i}>{number}</div>)
                            }
                        </div>
                    ))
                }
            </Card>
            <Button className="btn btn-primary" onClick={newCard}>Generate New Card</Button>
        </div>
    )
}