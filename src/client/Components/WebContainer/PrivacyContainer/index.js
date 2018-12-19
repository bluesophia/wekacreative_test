import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';
// import {} from './style.js';

/** components **/
import BigTitle from '../../Common/Title/BigTitle';

//Section2 Privacy List
// const privacyList = [
//     {
//         id: 0,
//         title: "Information Collection and Use",
//         contents: "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Audio, Phone State, Camera. The information that we request is will be retained by us and used as described in this privacy policy.The app does use third party services that may collect information used to identify you.Link to privacy policy of third party service providers used by the app Google Play Services"
//     },
//     {
//         id: 1,
//         title: "Log Data",
//         contents: "We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics."
//     },
//     {
//         id: 2,
//         title: "Cookies",
//         contents: "Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your device internal memory.This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collection information and to improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service."
//     },
//     {
//         id: 3,
//         title: "Service Providers",
//         contents: "We may employ third-party companies and individuals due to the following reasons:To facilitate our Service To provide the Service on our behalf To perform Service-related services or To assist us in analyzing how our Service is used. We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."
//     },
//     {
//         id: 4,
//         title: "Security",
//         contents: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."
//     },
//     {
//         id: 5,
//         title: "Links to Other Sites",
//         contents: "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
//     },
//     {
//         id: 6,
//         title: "Children’s Privacy",
//         contents: "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions."
//     },
//     {
//         id: 7,
//         title: "Changes to This Privacy Policy",
//         contents: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page."
//     },
//     {
//         id: 8,
//         title: "Contact Us",
//         contents: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us."
//     }
// ]
class PrivacyContainer extends Component {
    render(){
        return(
            <Sectoin01>
                <Container>
                    <Section01__Title>Privacy Policy</Section01__Title>
                    <Section01__Text>
                    WEKA CREATIVE built the client app as a Free app. This SERVICE is provided by WEKA CREATIVE at no cost and is intended for use as is.
                    This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
                    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at client unless otherwise defined in this Privacy Policy.
                    </Section01__Text>
                </Container>
                <Container>
                <ul>
                        <li><b>Information Collection and Use</b></li>
                        <Section01__Text>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Audio, Phone State, Camera. The information that we request is will be retained by us and used as described in this privacy policy.The app does use third party services that may collect information used to identify you.Link to privacy policy of third party service providers used by the app Google Play Services</Section01__Text>
                        <li><b>Log Data</b></li>
                        <Section01__Text>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</Section01__Text>
                        <li><b>Cookies</b></li>
                        <Section01__Text>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your device internal memory.This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collection information and to improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</Section01__Text>
                        <li><b>Service Providers</b></li>
                        <Section01__Text>We may employ third-party companies and individuals due to the following reasons:To facilitate our Service To provide the Service on our behalf To perform Service-related services or To assist us in analyzing how our Service is used. We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</Section01__Text>
                        <li><b>Security</b></li>
                        <Section01__Text>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</Section01__Text>
                        <li><b>Links to Other Sites</b></li>
                        <Section01__Text>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</Section01__Text>
                        <li><b>Children’s Privacy</b></li>
                        <Section01__Text>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</Section01__Text>
                        <li><b>Changes to This Privacy Policy</b></li>
                        <Section01__Text>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</Section01__Text>
                        <li><b>Contact Us</b></li>
                        <Section01__Text>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</Section01__Text>
                   </ul>
                </Container>
            </Sectoin01>
        )
    }
}


const Sectoin01 = styled.div`

`
const Section02 = styled.div`

`
const Container = styled.div`
    padding: 10%;
    padding-bottom: 0
    line-height: 1.5;
`
const privacyListmap = styled.div`

`
const Section01__Title = styled.div`
${BigTitle};
  color:${Themes.colors.black};
  text-align:center;
  margin-bottom: 40px;
    ${breakpoint('md')`
        text-align:center; 
        font-size: 40px;
        margin:0 0 4    0px 0;  
    `}
    ${breakpoint('lg')`
    `}
`
const Section01__Text = styled.div`
    padding:5%;
`

export default PrivacyContainer;