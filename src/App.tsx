import { AppShell, Header } from "@mantine/core";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <AppShell
        padding="md"
        navbar={<SideBar />}
        // header={
        //     <Header height={60} p="xs">
        //         {/* Header content */}
        //     </Header>
        // }
        styles={(theme) => ({
          main: {
            // backgroundColor: theme.colors.gray[0],
            height: "100vh",
            overflow: "hidden",
          },
        })}
      >
        <Outlet />
      </AppShell>
    </div>
  );
}

export default App;
