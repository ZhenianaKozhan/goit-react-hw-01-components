import styled from "styled-components";

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    margin: 80px;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border-collapse: collapse;
    background-color: white;
    text-align: center;
    
    th {
        width: 100%;
        background-color: teal;
        font-weight: bold;
        border: 1px solid #ccc;
        padding: 10px;
        color: white;
    }

    tr {
        display: flex;
        justify-content: space-around;
        
        &:nth-child(even) {
        background-color: silver;
        }
    }

    td {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
    }
`