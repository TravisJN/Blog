import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import HomeImage from '../assets/Home.png';
import HistoryImage from '../assets/History.png';
import FoodEntryImage from '../assets/FoodEntry.png';

function Apps() {
  const [currentApp, setApp] = useState('Logger');

  return (
    <Fade>
      <div className="main-container">
        <div className="links-list">
          <span className="link" onClick={() => setApp('Logger')}>Ins and Outs: The Food Symptom Tracker</span>
        </div>
        {currentApp === 'Logger' &&
          <div className="logger-container">
            <span>
              Ins and Outs: The Food Symptom Tracker is an app for iOS and Android that tracks IBS symptoms with a simple intuitive UI.
            </span>
            <span>
              Meant to be used while you go. Simply record how you're feeling and what you've eaten. Ins and Outs will look for patterns and inform you of foods you should avoid.
            </span>

            <div className="logger-picture-container">
              <img src={HomeImage} width={150} height={330} alt="Ins and Outs app home page" />
              <img src={FoodEntryImage} width={150} height={330} alt="Ins and Outs app food entry page" />
              <img src={HistoryImage} width={150} height={330} alt="Ins and Outs app history page" />
            </div>

            <h3>Privacy Policy</h3>
            <span>For the purposes of this privacy policy, the application shall be referred to as the “App”.</span>
            <span>There are no known risks to using the App. Users should refrain from exporting data unless they are certain that the receiving email address is authorized, credible, and secure. Users should understand that anyone can access their data if their smartphone is outside of their immediate control, and view the data entered into the app. If you are reading this Privacy Policy because you are concerned about the privacy of your data on your smartphone, I urge you to recognize and fulfill your responsibility to protect the privacy of your data by keeping your smartphone secure at all times. In using the App, users are free to define and/or use any data fields in language that makes them feel comfortable. The data remains on the user’s smartphone at all times, unless and until the user exports their data. At such time, the data should be considered available to the public domain, so users should use due caution before sharing their data. Data exported by the user at the user’s command is NOT email-deidentified and should therefore be considered data for public use.</span>
            <span>When user data is stored on iCloud, it is only accessible to the user. The App does not store any backup data on its own servers.</span>
            <span>Users are also free to stop using the App at any time. We will not pass on your personal details to any third party without your permission.</span>
            <h5>Changes to this privacy policy</h5>
            <span>If this privacy policy changes in any way, we will place an updated version on this page. Regularly reviewing this page ensures you are always aware of what information we collect, how we use it and under what circumstances.</span>
          </div>
        }
      </div>
    </Fade>
  );
}

export default Apps;
