import React from 'react'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'
const Footer = () => {
  return (
    <div className="row">
      <div className="Footer_outer_container">
        <div className="Footer_inner_container">
          <div className="footer_icon">
            <FacebookSharpIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>AudioDescription</li>
                <li>Investor Relatioons</li>
                <li>LegalNotice</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>HelpCentre</li>
                <li>Jobs</li>
                <li>Cookie Performance</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>GiftCards</li>
                <li>Terms of use</li>
                <li>CorporateInformation</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>MediaCentre</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
