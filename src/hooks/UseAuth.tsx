import { useEffect, useState } from "react";
import Axios from "../lib/axios";

export default function UseAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get("/me", { withCredentials: true })
            .then(res => {
                setUser(res.data?.user)
            })
            .catch(() => {
                setUser(null)
            })
            .finally(() => setLoading(false))
    }, []);
    
    return { user, loading };
}