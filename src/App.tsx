import "./App.css";
import { Layout } from "antd";
import { MainPage } from "./Components/MainPage/MainPage";
import { CartPage } from "./Components/CartPage/CartPage";
import { Routes, Route } from "react-router-dom";
import { AdminLoginPage } from "./Components/AdminLoginPage/AdminLoginPage";
import { useState } from "react";

function App() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />

                    <Route path="cart" element={<CartPage />} />
                    <Route
                        path="admin"
                        element={
                            <AdminLoginPage
                                login={login}
                                setLogin={setLogin}
                                password={password}
                                setPassword={setPassword}
                            />
                        }
                    />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
