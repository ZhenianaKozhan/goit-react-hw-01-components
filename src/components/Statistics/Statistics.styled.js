import styled from "styled-components";

export const TitleStats = styled.h2`
    padding: 30px;
    background-color: white;
    color: grey;
`

export const StatList = styled.ul`
    display: flex;
    justify-content: space-around;

    li {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        padding: 8px;
    }
`