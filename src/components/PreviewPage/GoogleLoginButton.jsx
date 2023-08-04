import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
    const navigate = useNavigate();
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                        navigate('/boast', { state: {} });
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton
