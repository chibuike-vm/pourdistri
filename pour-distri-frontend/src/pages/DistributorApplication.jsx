import axios from "axios";
import ApplicationForm from "../components/ApplicationForm";
import { toast } from "react-toastify";
import { redirect, useNavigation } from "react-router";
import styled from "styled-components";

const ToastWrapper = styled.article`
    background-image: linear-gradient(to right, #111827, #881337, #6b7280);
    color: #fff1f2;
    font-size: 1.05rem;
    padding: 0.5rem;
    text-align: center;
`;

export const action = async ({ request }) => {
    const formDataInstance = await request.formData();
    const applicantsData = Object.fromEntries(formDataInstance);
    try {
        const response = await axios.post(
            "https://pour-distri.onrender.com/distributors/applicants",
            applicantsData
        );
        toast.success(
            <ToastWrapper>
                <p>
                    Your application was{" "}
                    {response.data.applicantStatus.toUpperCase()}!
                </p>
                <p>
                    You will be contacted via email if you&apos;re considered.
                </p>
            </ToastWrapper>
        );
        return redirect("/");
    } catch (error) {
        toast.error(
            <ToastWrapper>
                <p>Your application was UNSUCCESSFUL!</p>
                <p>Please, try again.</p>
            </ToastWrapper>
        );
        return error;
    }
};

const DistributorApplication = () => {
    const { state } = useNavigation();

    return (
        <section>
            <ApplicationForm state={state} />
        </section>
    );
};
export default DistributorApplication;
