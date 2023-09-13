import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between px-12'>
            <h1 className='text-center text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} />
        </div>
    );
};

export default Header;