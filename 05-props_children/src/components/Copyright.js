import logo from '../assets/logo.png'

const Logo = () => <img src={logo} alt="logo" />;

const Copyright = () => {
    return (
        <div>
            <p>© 2021</p>
            <Logo />
        </div>
    );
}

export default Copyright;