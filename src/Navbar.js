import React from 'react';

class Navbar extends React.Component {

    render() {
       
        return (
            <div>
                <div>
                    <img src="https://image.flaticon.com/icons/svg/833/833314.svg" alt="cart-icon"/>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default Navbar;