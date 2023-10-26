import GlobalStyle from "@assets/styles/GlobalStyles";
import { routes as RoutesReact } from "./routes";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      <GlobalStyle />
      <RoutesReact />
    </QueryClientProvider>
  );
}

export default App;
