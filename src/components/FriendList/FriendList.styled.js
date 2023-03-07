import styled from "styled-components";

export const FriendItem = styled.li`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    padding: 8px;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);

    img {
        width: 80px;
    }

    p {
        font-size: 32px;
        font-weight: 500;
    }
`

export const Marker = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: ${({isOnline}) => isOnline?'green':'red'};
`