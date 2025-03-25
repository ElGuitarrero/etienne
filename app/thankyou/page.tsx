import { Suspense } from "react";
import ThankYou from "@/components/Thankyou";

export default function Index() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ThankYou />
        </Suspense>
    );
}