import React from 'react';
import "./css/Footer.scss"
class Footer extends React.Component {
        render() {
                return (
                        <>
                                <footer className="flex-rw">
                                        <ul className="footer-list-top">
                                                <li><h4 class="footer-list-header">About New Meal</h4></li>
                                                <li><a href="./about" itemProp="significantLink" className="generic-anchor footer-list-anchor" >GET TO KNOW US</a></li>
                                                <li><a href="./plan" itemProp="significantLink" className="generic-anchor footer-list-anchor" >BECOME A PLANNER</a></li>
                                        </ul>
                                        <ul className="footer-list-top">
                                                <li> <h4 className="footer-list-header">The Food Selection</h4></li>
                                                <li><a href='/Angels/cat/id/70' className="generic-anchor footer-list-anchor">SEARCH YOUR FOOD</a></li>
                                                <li><a href='/Home-Decor/cat/id/64' className="generic-anchor footer-list-anchor">SHARE YOUR FOOD</a></li>
                                        </ul>
                                        <ul className="footer-list-top">
                                                <li> <h4 className="footer-list-header">Please help Me</h4></li>
                                                <li><a href='/Angels/cat/id/70' className="generic-anchor footer-list-anchor">CONTACT: 0413886930</a></li>
                                                <li><a href='/Home-Decor/cat/id/64' className="generic-anchor footer-list-anchor">NEW USERS</a></li>
                                        </ul>
                                        <section className="footer-social-section flex-rw">
                                                <span className="footer-social-overlap footer-social-connect">
                                                        CONNECT <span className="footer-social-small">with</span> US
                                                 </span>
                                                <span className="footer-social-overlap footer-social-icons-wrapper">
                                                        <a href="https://www.pinterest.com/paviliongift/" className="generic-anchor" target="_blank" title="Pinterest" itemProp="significantLink"><i className="fa fa-pinterest"></i></a>
                                                        <a href="https://www.facebook.com/paviliongift" className="generic-anchor" target="_blank" title="Facebook" itemProp="significantLink"><i className="fa fa-facebook"></i></a>
                                                        <a href="https://twitter.com/PavilionGiftCo" className="generic-anchor" target="_blank" title="Twitter" itemProp="significantLink"><i className="fa fa-twitter"></i></a>
                                                        <a href="http://instagram.com/paviliongiftcompany" className="generic-anchor" target="_blank" title="Instagram" itemProp="significantLink"><i className="fa fa-instagram"></i></a>
                                                        <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" className="generic-anchor" target="_blank" title="Youtube" itemProp="significantLink"><i className="fa fa-youtube"></i></a>
                                                        <a href="https://plus.google.com/+Paviliongift/posts" className="generic-anchor" target="_blank" title="Google Plus" itemProp="significantLink"><i className="fa fa-google-plus"></i></a>
                                                </span>
                                        </section>
                                        <section className="footer-bottom-section flex-rw">
                                                <div className="footer-bottom-wrapper">
                                                        <i className="fa fa-copyright" role="copyright">

                                                        </i> 2019 New Meal in <address className="footer-address" role="company address">Sydney, AU</address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
                                                </div>
                                                <div className="footer-bottom-wrapper">
                                                        <a href="/terms-of-use.html" className="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" className="generic-anchor" rel="nofollow">Privacy</a>
                                                </div>
                                        </section>
                                </footer>
                        </>
                );
        }
}

export default Footer;