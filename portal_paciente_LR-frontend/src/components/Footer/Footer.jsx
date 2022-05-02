import React from 'react';
import "../../styles/footer.scss"


function Footer() {
    return (
        <div className="main-footer">
            <div className='container'>
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Gobierno de La Rioja |  Ministerio de Salud  | Fundación FEIAS
                    </p>

                </div>
            </div>
        </div>
    )
}
export default Footer;
