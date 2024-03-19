import axios from "axios";
import ApplicationForm from "../components/ApplicationForm";
import { toast } from "react-toastify";
import { redirect, useNavigation } from "react-router";

export const action = async ({ request }) => {
    const formDataInstance = await request.formData();
    const applicantsData = Object.fromEntries(formDataInstance);
    try {
        const response = await axios.post(
            "http://localhost:5001/distributors/applicants",
            applicantsData
        );
        toast.success(
            <p>
                Your application was{" "}
                {response.data.applicantStatus.toUpperCase()}!<br />
                <br />
                You will be contacted via email if you&apos;re considered.
            </p>
        );
        return redirect("/");
    } catch (error) {
        toast.error(
            <p>
                Your application was UNSUCCESSFUL! <br />
                <br />
                Please, try again.
            </p>
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
