import styled from "styled-components";

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

export const AccentButton = styled.button`
  color: #fff;
  background-color: ${AccentColor};
  border: none;
  cursor: pointer;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  border-radius: 3px;
`;
