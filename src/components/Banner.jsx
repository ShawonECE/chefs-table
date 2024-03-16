import chef from '../assets/chef2.jpeg';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-[#150B2B] via-[#150B2B] to-transparent bg-center bg-no-repeat bg-cover p-12 lg:p-48 rounded-2xl" style={{backgroundImage: `url(${chef})`}}>
            <h1 className="text-white text-center font-bold text-3xl lg:text-5xl mb-6">Discover an exceptional cooking class tailored for you!</h1>
            <p className='text-white text-center text-lg mb-4 lg:mb-10'>Savor exquisite flavors and indulge in culinary delights at our restaurant. Experience delectable dishes crafted with passion and served with elegance. Join us for an unforgettable dining experience today!</p>
            <div className='flex justify-center gap-5'>
                <button className="btn rounded-full bg-[#0BE58A] lg:text-lg border-0">Explore Now</button>
                <button className="btn rounded-full bg-transparent lg:text-lg">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;