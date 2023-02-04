import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ProviderTheme } from "./theme/ThemeProvider";

render(
    <BrowserRouter>
        <ProviderTheme>
            <App />
        </ProviderTheme>
    </BrowserRouter>, 
    document.getElementById("root")
)