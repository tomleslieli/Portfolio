import '../assets/stylesheets/navbar.scss';

function NavBar() {
    const subject = 'Software Engineer Position'
    const body = 'Hello Tom! We would love to have you join our team at <COMPANY NAME GOES HERE>.'
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <div className='personal-logo'>
                    <img src='https://tomleslieli-portfolio.s3.amazonaws.com/tom-leslie-li-logo.png' alt='tom-leslie-li-logo'/>
                </div>
            </div>
            <div className='navbar-right'>
                <a href='https://linkedin.com/in/tomleslieli/'>
                    <button>
                        <div className='button-logo'>
                            <img src='https://tomleslieli-portfolio.s3.amazonaws.com/linkedin-logo.png' alt='linkedin-logo'/>
                        </div>
                    </button>
                </a>
                <a href='https://github.com/tomleslieli'>
                    <button>
                        <div className='button-logo'>
                            <img src='https://tomleslieli-portfolio.s3.amazonaws.com/github-logo.png' alt='github-logo'/>
                        </div>
                    </button>
                </a>
                <a href={`mailto:tomleslieli@yahoo.com?subject=${subject}&body=${body}`}>
                    <button>
                        <div className='button-logo'>
                            <img src='https://tomleslieli-portfolio.s3.amazonaws.com/email-icon.png' alt='email-icon'/>
                        </div>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default NavBar;