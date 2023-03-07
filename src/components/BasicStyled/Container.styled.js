import styled from "styled-components";

export const Container = styled.div`
    width: 25%;
    margin: auto;
    text-align: center;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);

    &:not(:first-child) {
        margin-top: 100px;
    }
`
