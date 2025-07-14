import { useEffect, useState } from 'react';

const MouseTrail = () => {
	const [trail, setTrail] = useState([]);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setTrail(prev => [...prev, { x: e.clientX, y: e.clientY, timestamp: Date.now() }]);
		};

		const animationFrame = requestAnimationFrame(function animate() {
			setTrail(prev => prev.filter(p => Date.now() - p.timestamp < 400));
			requestAnimationFrame(animate);
		});

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(animationFrame);
		};
	}, []);

	return (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			pointerEvents: 'none',
			zIndex: 9999,
			filter: 'drop-shadow(0 0 8px rgba(255, 0, 193, 0.8))'
		}}>
			<svg style={{ width: '100%', height: '100%' }}>
				<defs>
					<linearGradient id="trailGradient" gradientTransform="rotate(90)">
						<stop offset="0%" stopColor="#FF00C1" />
						<stop offset="100%" stopColor="#9B00FF" />
					</linearGradient>
				</defs>
				{trail.map((point, index) => {
					const age = Date.now() - point.timestamp;
					const opacity = 1 - (age / 400);
					const radius = 6 * opacity;

					return (
						<circle
							key={index}
							cx={point.x}
							cy={point.y}
							r={radius}
							fill="url(#trailGradient)"
							style={{ opacity: opacity > 0 ? opacity : 0 }}
						/>
					);
				})}
			</svg>
		</div>
	);
};

export default MouseTrail; 