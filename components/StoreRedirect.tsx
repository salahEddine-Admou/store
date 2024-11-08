"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const StoreRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        // Vérifier si le nom du store est déjà présent dans sessionStorage
        const existingStoreName = sessionStorage.getItem("storeName");

        if (!existingStoreName) {
            // Extraire le nom du store à partir du chemin (e.g., /storeName)
            const pathname = window.location.pathname;
            const pathParts = pathname.split("/");

            // Récupérer le premier segment après le slash
            const storeName = pathParts[1];

            if (storeName) {
                // Enregistrer le nom du store dans sessionStorage
                sessionStorage.setItem("storeName", storeName);

                // Rediriger vers la racine
                router.push(`/`);
            }
        }
    }, [router]); // Le hook s'exécute une fois au montage

    return null; // Ce composant n'a pas besoin de rendre quoi que ce soit
};

export default StoreRedirect;
