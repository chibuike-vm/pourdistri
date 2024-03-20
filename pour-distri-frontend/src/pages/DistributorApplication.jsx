import axios from "axios";
import ApplicationForm from "../components/ApplicationForm";
import { toast } from "react-toastify";
import { redirect, useNavigation } from "react-router";

export const action = async ({ request }) => {
    const formDataInstance = await request.formData();
    const applicantsData = Object.fromEntries(formDataInstance);
    try {
        const response = await axios.post(
            "https://pour-distri.onrender.com/distributors/applicants",
            applicantsData
        );
        toast.success(
            `Your application was ${response.data.applicantStatus.toUpperCase()}!`
        );
        return redirect("/");
    } catch (error) {
        toast.error(`Your application was UNSUCCESSFUL! Kindly, try again.`);
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
