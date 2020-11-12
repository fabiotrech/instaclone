import styled, { css } from "styled-components";

export const HeaderHeight = 54;
export const AccentColor = "#0095f6";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 935px;
`;

export const PageContainer = styled(Container)`
  margin-top: ${HeaderHeight}px;
  padding-top: 20px;
`;

interface AccentButtonProps {
  block?: boolean;
}

export const AccentButton = styled.button<AccentButtonProps>`
  color: #fff;
  background-color: ${AccentColor};
  border: none;
  cursor: pointer;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  border-radius: 3px;

  ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}
`;

export const Input = styled.input`
  border: 1px solid #dbdbdb;
  background: #fafafa;
  padding: 8px;
  font-size: 12px;
  line-height: 18px;
  width: 100%;
  outline: none;
  border-radius: 3px;

  &:focus {
    border-color: #262626;
  }
`;

export const Form = styled.form`
  input,
  select,
  textarea {
    margin-bottom: 10px;
  }
`;
