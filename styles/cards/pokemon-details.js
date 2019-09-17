import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background: white;
  flex-basis: content;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: white;
  margin-left: 50px;
  font-family: Arial;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Item = styled.span`
  font-size: 16px;
  margin: 8px 0px 8px 0px;
`;

const Type = styled.span`
  font-size: 24px;
  margin: 10px 0px 10px 0px;
`;

const Classification = styled.span`
  margin: 10px 0px 15px 0px;
  font-size: 20px;
`;

const Row = styled.tr`
  border: 1px solid black;
`;

const Cell = styled.td`
  border: 1px solid black;
  min-width: 120px;
  padding-left: 3px;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin-top: 10px;
`;

const Title = styled(Row)`
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export {
  Container,
  Content,
  ImageContainer,
  Item,
  Type,
  Classification,
  Row,
  Cell,
  Table,
  Title
};
