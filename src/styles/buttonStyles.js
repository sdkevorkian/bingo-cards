import styled from 'styled-components';

const Button = styled.button`
    background-color: var(--teal);
    border-color: var(--teal);
    color: var(--cream);
    font-weight: bold;
    margin: 2em auto;
    cursor: pointer;
    ${this}:hover{
        background-color: var(--teal);
    }
`;

export default Button;