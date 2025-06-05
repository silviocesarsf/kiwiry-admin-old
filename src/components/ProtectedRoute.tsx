import { JSX } from "react";
import UseAuth from "../hooks/UseAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { user, loading } = UseAuth();
    if (loading) {
        return <h1>Carregando...</h1>
    }

    // if (!user) {
    //     return <Navigate to={"/login"} replace />
    // }

    return children;
}