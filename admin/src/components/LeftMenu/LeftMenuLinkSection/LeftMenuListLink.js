import styled from 'styled-components';

const LeftMenuListLink = styled.div`
  max-height: 500px;
  margin-bottom: 19px;
  margin-right: 25px;
  overflow: auto;
  display: flex;
  flex-direction: column;

  &:nth-child(4) > :nth-child(3) {
    order: 1;
  }

  &:nth-child(4) > :nth-child(4) {
    order: 2;
  }

  &:nth-child(4) > :nth-child(1) {
    order: 3;
  }

  &:nth-child(4) > :nth-child(2) {
    order: 4;
  }
`;

export default LeftMenuListLink;
