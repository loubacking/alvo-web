import styled from 'styled-components';

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  height: calc(2.5rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-indent: 35px;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 2px solid #ced4da;
  border-radius: 10px;
  -webkit-transition: border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-55%);
  color: #5959be;
  font-size: 16px;
`;
