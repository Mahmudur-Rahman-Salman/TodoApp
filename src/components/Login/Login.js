
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { signInWithGoogle } = useAuth();


    return (
        <div className='container'>
            <h2 className='text-center m-3'>Please Login to visit the Todo Page</h2>

            <div className='d-flex justify-content-center m-5 p-5'>
                <button className="btn btn-primary w-50" onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;