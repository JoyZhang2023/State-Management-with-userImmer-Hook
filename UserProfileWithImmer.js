import { useImmer } from 'use-immer';

function UserProfileWithImmer() {
    const [userprofile, setUserprofile] = useImmer({
        name: 'John',
        email:'john@abc.com',
        contactDetails: {phone:'2061112222', address:'123 abc street NE, Seattle, WA 98111'},
        preference: {newsletter:false, notifications:false}
    });
    

    const updateContactDetails = () => {
        const inputField = document.getElementById("phoneNumber").value;
        const addressField = document.getElementById("addressInput").value;
        if(inputField === '') {
            if(addressField === '') {
            }else{
                setUserprofile(profile => {
                    profile.contactDetails.address = addressField;
                });
            }
        }else {
            if(addressField === '') {
                setUserprofile(profile => {
                    profile.contactDetails.phone = inputField;
                });
            }else{
                setUserprofile(profile => {
                    profile.contactDetails.phone = inputField;
                    profile.contactDetails.address = addressField;
                });
            }
        }

    };

    const toggleNewsletterSubscrition = ()=> {
        setUserprofile((profile)=>{
            profile.preference.newsletter = !profile.preference.newsletter;
        });

    };

    return (
        <div>
            <p>{userprofile.name} has phone number of {userprofile.contactDetails.phone} and address of {userprofile.contactDetails.address} in
             file and newsletter setting is {userprofile.preference.newsletter.toString()}.
            </p>
            
            <button onClick={toggleNewsletterSubscrition}>Click to change Newsletter subscription</button>
            <br></br>
            <input type="text" id="phoneNumber" placeholder='Enter phone number here'></input>
            <br></br>
            <input type="text" id="addressInput" placeholder='Enter address here'></input>
            <br></br>
            <button onClick={updateContactDetails}>Click to update contact details</button>
        </div>

    )

};

export default UserProfileWithImmer;