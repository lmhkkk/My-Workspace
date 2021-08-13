import React , {Component} from 'react'

class Header extends Component {

    render() {

        return(
            <header>
            <nav>
                <div class="nav__content">
                    <div class="nav__left">
                        <a href="#">
                            <h2>New Shop</h2>
                        </a>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Woman</a></li>
                            <li><a href="#">Man</a></li>
                            <li><a href="#">Short Code</a></li>
                            <li><a href="#">Mail Us</a></li>
                        </ul>
                    </div>
                    <div class="nav_right">
                        <p>$0.00(0 items)</p>
                        <i class="fa fa-shopping-cart"></i>
                        <a href="#">Empty Cart</a>
                    </div>
                </div>
            </nav>
        </header>
        );
    }
}

export default Header;