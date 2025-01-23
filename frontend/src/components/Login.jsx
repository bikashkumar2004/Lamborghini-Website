import { Navigate, Route, Routes } from "react-router-dom";
import FloatingShape from "./FloatingShape";


import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import EmailVerificationPage from "../pages/EmailVerificationPage";
import DashboardPage from "../pages/DashboardPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

import LoadingSpinner from "./LoadingSpinner";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";
import HomePage from "../Component/HomePage";
import Temerario from "../Models/Temerario";
import Revuelto from "../Models/Revuelto";
import UrusSE from "../Models/UrusSE";
import UrusS from "../Models/UrusS";
import UrusPerformante from "../Models/UrusPerformante";
import HuracánSterrato from "../Models/HuracánSterrato";
import HuracánTecnica from "../Models/HuracánTecnica";
import HuracánSto from "../Models/HuracánSto";
import HuracánEVOSpyder from "../Models/HuracánEVOSpyder";
import ModelPage from "../Component/ModelPage";
import Ownership from "../Component/Ownership";
import Musume from "../Component/Musume";
import Store from "../Component/Store";
import CountachLPI from "../Models/CountachLPI";
import SianFKP from "../Models/SianFKP";
import SiánRoadster from "../Models/SiánRoadster";
import TerzoMillennio from "../Models/TerzoMillennio";
import Asterion from "../Models/Asterion";
import Estoque from "../Models/Estoque";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};

function Login() {
	const { isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;

	return (
		<div
			className='h-full'
		>
			{/* <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} /> */}

			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							{/* <DashboardPage /> */}
							<HomePage />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/signup'
					element={
						<RedirectAuthenticatedUser>
							<SignUpPage />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route
					path='/login'
					element={
						<RedirectAuthenticatedUser>
							<LoginPage />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route path='/verify-email' element={<EmailVerificationPage />} />
				<Route
					path='/forgot-password'
					element={
						<RedirectAuthenticatedUser>
							<ForgotPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>

				<Route
					path='/reset-password/:token'
					element={
						<RedirectAuthenticatedUser>
							<ResetPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>

				<Route
					path='/model/temerario'
					element={
						<Temerario />
					}
				/>
				<Route
					path='/model/revuelto'
					element={
						<Revuelto />
					}
				/>
				<Route
					path='/model/urus/urus-se'
					element={
						<UrusSE />
					}
				/>
				<Route
					path='/model/urus/urus-s'
					element={
						<UrusS />
					}
				/>
				<Route
					path='/model/urus/urus-performante'
					element={
						<UrusPerformante />
					}
				/>
				
				<Route
					path='/model/huracán/huracán-sterrato'
					element={
						<HuracánSterrato />
					}
				/>
				<Route
					path='/model/huracán/huracán-tecnica'
					element={
						<HuracánTecnica />
					}
				/>
				<Route
					path='/model/huracán/huracán-sto'
					element={
						<HuracánSto />
					}
				/>
				<Route
					path='/model/huracán/huracán-evo-spyder'
					element={
						<HuracánEVOSpyder />
					}
				/>
				<Route
					path='/model/huracán/countach-lpi-800-4'
					element={
						<CountachLPI />
					}
				/>
				<Route
					path='/model/huracán/sian-fkp-37'
					element={
						<SianFKP />
					}
				/>
				<Route
					path='/model/huracán/sián-roadster'
					element={
						<SiánRoadster />
					}
				/>
				<Route
					path='/model/huracán/terzo-millennio'
					element={
						<TerzoMillennio />
					}
				/>
				<Route
					path='/model/huracán/asterion'
					element={
						<Asterion />
					}
				/>
				<Route
					path='/model/huracán/estoque'
					element={
						<Estoque />
					}
				/>
				<Route
					path='/model'
					element={
						<ModelPage />
					}
				/>
				<Route
					path='/ownership'
					element={
						<Ownership />
					}
				/>
				<Route
					path='/musume'
					element={
						<Musume />
					}
				/>
				<Route
					path='/store'
					element={
						<Store />
					}
				/>




				{/* catch all routes */}
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default Login;
