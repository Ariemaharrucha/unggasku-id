import { useState, useEffect } from "react";
import { getDokter } from "../services/api.profiledokter.js";
import useUser from "../../../stores/useStore.js";

export const useGetProfileDokter = () => {
    const { user } = useUser();
    const [dokter, setDokter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDokter = async () => {
            if (!user?.id) return;
            try {
                setLoading(true);
                const response = await getDokter(user.id);
                setDokter(response.data[0]); 
            } catch (err) {
                console.error("Error fetching dokter:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDokter();
    }, [user?.id]);

    return { dokter, user, loading, error };
};
