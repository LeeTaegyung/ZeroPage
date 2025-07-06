import styled from "@emotion/styled";
import SearchBar from "@components/SearchBar/SearchBar";
import TodoList from "@components/TodoList/TodoList";
import Today from "@components/Today/Today";

const DashboardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const DashboardInner = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Dashboard = () => {
  return (
    <DashboardWrap>
      <DashboardInner>
        <Today />
        <SearchBar />
        <TodoList />
      </DashboardInner>
    </DashboardWrap>
  );
};

export default Dashboard;
