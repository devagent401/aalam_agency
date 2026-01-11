import ContractContactSection from "../components/ContractContactSection";
import ContractQuickActions from "../components/ContractQuickActions";

const ContractPage = () => {
    return (
        <main className="bg-dark-deep min-h-screen">
            <div className="pt-20"> {/* Add padding for fixed navbar if needed, or adjust based on layout */}
                <ContractContactSection />
                <ContractQuickActions />
            </div>
        </main>
    );
};

export default ContractPage;