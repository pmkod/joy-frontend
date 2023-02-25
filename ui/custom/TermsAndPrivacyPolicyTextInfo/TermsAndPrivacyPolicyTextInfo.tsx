import Link from "next/link";

const TermsAndPrivacyPolicyTextInfo = () => {
    return (
        <div className="text-xs text-gray-700">
            En vous inscrivant vous acceptez les&nbsp;
            <Link href="terms" className="text-blue-500">
                Conditions d'Utilisations
            </Link>{" "}
            et la &nbsp;
            <Link href="/privacy-policy" className="text-blue-500">
                Politique de confidentialité
            </Link>
        </div>
    );
};

export default TermsAndPrivacyPolicyTextInfo;
