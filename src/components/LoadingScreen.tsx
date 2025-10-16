import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import '../styles/LoadingScreen.scss';

type LoadingScreenProps = {
	onComplete: () => void;
};

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + 2;
			});
		}, 30);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (progress >= 100) {
			const timeout = setTimeout(onComplete, 500);
			return () => clearTimeout(timeout);
		}
		return undefined;
	}, [progress, onComplete]);

	const particles = useMemo(() => Array.from({ length: 16 }, (_, index) => index), []);

	return (
		<motion.div
			className="loading"
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="loading__content">
				<motion.div
					className="loading__counter"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
				>
					<span className="loading__number">{progress}</span>
					<span className="loading__percent">%</span>
				</motion.div>

				<div className="loading__bar">
					<motion.div
						className="loading__bar-fill"
						animate={{ width: `${progress}%` }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
					/>
				</div>

				<motion.p
					className="loading__tagline"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.8 }}
				>
					Preparing the experience
				</motion.p>
			</div>

			<div className="loading__particles">
				{particles.map((particle) => (
					<motion.span
						key={particle}
						className="loading__particle"
						initial={{ opacity: 0, scale: 0 }}
						animate={{
							opacity: [0, 0.7, 0],
							scale: [0.2, 1, 0.2],
							y: [0, -40, 0],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							delay: particle * 0.1,
						}}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default LoadingScreen;
