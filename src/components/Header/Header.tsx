import { KeyboardEvent } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import startPage from '../../assets/startPage.svg';

type PropsType = {
    onEnterClick: (e: KeyboardEvent<HTMLInputElement>) => void;
    setValue: (value: string) => void;
    value: string;
}

const HeaderWrapper = styled.header`
    background: #0064EB;
    padding: 16px 0 16px 41px;
    display: flex;
`

const InputWrapper = styled.div`
  width: 500px;
  border-radius: 6px;
  margin-left: 22px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 8px 19px;
    `
const InputImage = styled.img`
    width: 14px;
    `
const StyledInput = styled.input`
  border: none;
  font-size: 14px;
  line-height: 17px;
  margin-left: 11px;
  font-family: 'Inter', sans-serif;
  width: 100%;
  &:focus-visible {
    outline: none;
  }
`

export const Header = ({ onEnterClick, setValue, value }: PropsType) => {
    return (
        <HeaderWrapper>
            <img src={logo} />
            <InputWrapper>
                <InputImage src={startPage}/>
                <StyledInput type="text"
                              onChange={(e) => setValue(e.currentTarget.value)}
                              onKeyPress={onEnterClick} value={value}
                             placeholder={'Enter Github username'}
                />
            </InputWrapper>
        </HeaderWrapper>
    )
}