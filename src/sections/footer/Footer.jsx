import './footer.css'

const Footer = () => {
    return(
    <footer id="footer" className="bg-color-light border-0 pt-5 mt-0">
        <div className="footer-copyright curved-border curved-border-top d-flex align-items-center">
            <div className="container py-2">
                <div className="text-center">
                    <p className="text-3">© 2023 Copyright.
                        <strong className="font-weight-normal text-color-light opacity-7">
                            {'\u00A0'}FELIPE BOMFIM</strong> <br/> ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    </footer>
    )
};

export default Footer;