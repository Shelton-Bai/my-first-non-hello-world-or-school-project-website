import React, {useState, useEffect} from 'react';

function Home() {

	return (
		<div className='bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150 flex flex-col min-h-screen'>
			<div className='bg-hexagonsdark bg-cover bg-fixed border-t-2 border-b-2 border-grayscale-150 border-solid'>
				<div className='p-20 px-32 w-3/4'>
					<p className='text-grayscale-900 text-6xl'>
						Hi! I'm Shelton.
					</p>
					<p className='text-grayscale-800 text-xl'>
						<br/>
						I'm a software developer from Audubon, Pennsylvania, a suburb near Philly. I graduated from the University of Pittsburgh, and I am currently searching for employment. Feel free to check out the Skills and Projects pages for a closer look at some of the things I can do, and if you have any suggestions, please leave a comment by the About page.
					</p>
				</div>
			</div>

			<div className='p-20 px-32 w-3/4'>
				<p className='text-grayscale-900 text-3xl'>
					What is this website?
				</p>
				<p className='text-grayscale-700 text-xl'>
					<br/>
					I was feeling kinda left out not having a personal website, because every software developer worth their salt has one. So I grabbed an Oracle Cloud Instance (because their free tier is completely free, not like just a free trial) and bada bing bada boom, here we are. The first iterations of this website were, let's just say not so easy on the eyes, but after watching a few YouTube videos and following their suggestions on designing websites, I'm happy with this current look.
					<br/><br/>
					I also took a look at other people's portfolio websites, and most of them had this all-business air to them, saying stuff following a template like "My name is [Person], I build highly-scalable solutions for digital business" or something. I get why they do it, and I understand that it helps other people quickly generalize their skillset, but it's also not my style. If you want that sort of intro, my resume is on the Skills page, but here, I'd like to show more than just my skillset.
				</p>

				<Timer/>
			</div>

			
		</div>
	);
}

function Timer() {
	const calculateTimeLeft = () => {
		const targetDate = new Date('2024-12-21T22:34:59');
		const now = new Date();
		const difference = targetDate - now;

		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
				hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
				minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
				seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
			};
		} else {
			timeLeft = {
				days: '00',
				hours: '00',
				minutes: '00',
				seconds: '00',
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="text-grayscale-900 mt-10">
			<p className='italic text-3xl'>🎵 And I've got a countdown timer 'till I'm destitute! 🎵</p>
			<div className="flex justify-start space-x-4 text-6xl font-mono text-center mt-5">
				<div>
					<p>{timeLeft.days}</p>
					<p className="text-lg">Days</p>
				</div>
				<span>:</span>
				<div>
					<p>{timeLeft.hours}</p>
					<p className="text-lg">Hours</p>
				</div>
				<span>:</span>
				<div>
					<p>{timeLeft.minutes}</p>
					<p className="text-lg">Minutes</p>
				</div>
				<span>:</span>
				<div>
					<p>{timeLeft.seconds}</p>
					<p className="text-lg">Seconds</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
