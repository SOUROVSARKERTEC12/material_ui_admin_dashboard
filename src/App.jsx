import {ColorModeContext, useMode} from "./theme.js";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar.jsx";
import {Route, Routes} from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar.jsx";
import Dashboard from "./scenes/dashboard/index.jsx";
import Team from "./scenes/team/Team.jsx";
import Contacts from "./scenes/contacts/Contacts.jsx"
import Invoices from "./scenes/invoices/Invoices.jsx";
import Form from "./scenes/form/Form.jsx";
import Calendar from "./scenes/calendar/Calendar.jsx";
import FAQ from "./scenes/faq/FAQ.jsx";
import Bar from "./scenes/bar/Bar.jsx";
import Pie from "./scenes/pie/Pie.jsx";
import Line from "./scenes/line/Line.jsx";
import Geography from "./scenes/geography/Geography.jsx";
import {useState} from "react";

function App() {
    const [theme, colorMode] = useMode()
    const [isSidebar, setIsSidebar] = useState(true)
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                        <Topbar setIsSidebar={setIsSidebar}/>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/geography" element={<Geography />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
