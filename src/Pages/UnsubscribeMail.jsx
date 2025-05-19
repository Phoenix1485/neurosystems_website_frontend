import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // useNavigate für die Weiterleitung
import axios from "axios";
import { showWarningToast } from "../Components/ToastProvider";

const Unsubscribe = () => {
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");
    const username = searchParams.get("username");
    const [status, setStatus] = useState("loading");
    const [hasUnsubscribed, setHasUnsubscribed] = useState(false); // Verhindert mehrfaches Senden
    const navigate = useNavigate(); // navigate hook für Weiterleitung

    useEffect(() => {
        if (email && username && !hasUnsubscribed) {
            setHasUnsubscribed(true); // Setzt auf true, damit es nicht mehrfach gesendet wird

            axios.get(`http://localhost:5000/api/newsletter/unsubscribe?email=${email}&username=${username}`)
                .then(response => {
                    setStatus("success");

                    // Weiterleitung nach erfolgreichem Unsubscribe
                    setTimeout(() => {
                        navigate("/"); // Weiterleitung zur Startseite
                    }, 5000); // Warte 5 Sekunden, bevor weitergeleitet wird
                })
                .catch(error => {
                    if (error.response && error.response.data.error === "No subscription found for this email") {
                        setStatus("already_unsubscribed");
                        showWarningToast("You are already unsubscribed.");
                    } else {
                        setStatus("error");
                    }
                });
        } else if (!email || !username) {
            setStatus("invalid");
        }
    }, [email, username, hasUnsubscribed, navigate]); // navigate hinzugefügt

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-bg-main-color p-6 rounded-lg shadow-md text-center">
                {status === "loading" && <p>Processing your request...</p>}
                {status === "success" && (
                    <>
                        <h2 className="text-2xl text-green-500 font-semibold">You have been successfully unsubscribed</h2>
                        <p className="text-gray-600 mt-2">You will no longer receive any newsletter from us.</p>
                    </>
                )}
                {status === "already_unsubscribed" && (
                    <>
                        <h2 className="text-2xl font-semibold text-orange-500">You are already unsubscribed</h2>
                        <p className="text-gray-600 mt-2">You had already unsubscribed earlier.</p>
                    </>
                )}
                {status === "error" && (
                    <>
                        <h2 className="text-2xl font-semibold text-red-600">Error!</h2>
                        <p className="text-gray-600 mt-2">An error occurred while unsubscribing.</p>
                    </>
                )}
                {status === "invalid" && (
                    <>
                        <h2 className="text-2xl font-semibold text-red-600">Invalid Request</h2>
                        <p className="text-gray-600 mt-2">Missing email or username.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Unsubscribe;
