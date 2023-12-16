import Lottie from 'lottie-react';
import DashAni from '../../assets/dashAni.json'
import useAuth from '../../Hooks/useAuth/useAuth';
const DashboardHome = () => {
    const {user} = useAuth()
    return (
        <div className='max-w-2xl mx-auto'>
            <h1 className='text-5xl font-bold text-center mt-10'>Welcome To Dash<span className='text-red-500'>Board</span>, <br/>{user.displayName}</h1>
            <Lottie animationData={DashAni} loop={true} />
        </div>
    );
};

export default DashboardHome;