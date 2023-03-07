import styled from "styled-components";

export const Description = styled.div`
    background-color: white;
    padding: 30px;

    img {
        width: 200px;
        margin: auto;
        border-radius: 50%;
    }

    h3 {
        margin-top: 10px;
        color: black;
    }

    p {
        margin-top: 10px;
        color: grey;
    }
`

export const Stats = styled.ul`
    display: flex;
    justify-content: space-around;
    background-color: grey;
    

    li {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 8px;
        gap: 8px;
        border: 1px solid black;
    }
`