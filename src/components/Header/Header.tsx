import { KeyboardEvent } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

type PropsType = {
    onEnterClick: (e: KeyboardEvent<HTMLInputElement>) => void;
    setValue: (value: string) => void;
    value: string;
}

const HeaderWrapper = styled.header`
    background: #0064EB;
    padding: 16px 0 16px 41px;
    display: flex;
    margin-bottom: 39px;
`

const StyledInput = styled.input`
    width: 500px;
    border-radius: 6px;
    margin-left: 22px;
    `

export const Header = ({ onEnterClick, setValue, value }: PropsType) => {
    return (
        <HeaderWrapper>
            <img src={logo} />
            <StyledInput type="text" onChange={(e) => setValue(e.currentTarget.value)} onKeyPress={onEnterClick} value={value} />
        </HeaderWrapper>
    )
}