
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
function FaQ() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {/* <NavBar/> */}

      <div style={{ backgroundColor: '#DFE3E8', height: '100vh', width: '100vw', textAlign: 'left' }}>
        <div style={{ backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px' }}>
          <h1 style={{ fontFamily: 'Arial', fontSize: '68px', fontWeight: 'bold', }}>FAQs</h1>
          <div style={{ textAlign: 'left', fontFamily: 'Copperplate', margin: '2%' }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography sx={{ flexShrink: 0, }}>
                  Why did we set up a pet adoption</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We believe that pet adoption and adoption should be a kind, safe and reliable process for every being involved. <br />
                  We know that sometimes rehoming is necessary and that it can be a painful decision. By offering a non-judgemental and straightforward option, we make it easier for people to do the right thing by their pets and themselves.
                  We are a viable alternative to unregulated sites like Pets4Homes, Gumtree, Preloved and Facebook. This enables us to improve pet welfare and educate people about responsible rehoming and adoption.
                  We also want to take some pressure off rescue organisations by reducing the number of pets in shelters. This way, we can create space for the animals who really need professional care.
                  We are part of a registered charity, and we're proud to have Peter Egan as our Patron. To find out more about our team please watch our video
                  About
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ flexShrink: 0 }}>Why should I look for a pet on Pet Adoption before i visit a rescue center</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Every pet adopted though Pet Adoption is almost surely a pet that is likely to end up in a rescue centre. With Pet Adoption, dogs, cats and rabbits can go directly from one good home to another, avoiding the need to be placed in a shelter. Imagine if everyone used Pet Adoption... we could keep thousands of pets out of shelters each year! How great would that be?</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header">
                <Typography sx={{ flexShrink: 0 }}>
                  Rescue centres often don't let people adopt a pet because they have young children or no garden.  <br /> Does Pet Adoption follow the same rules?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Every pet has different needs and every adopter is in a different situation. So we prefer to look at each case individually rather than following a ‘one-size-fits-all’ policy. However, pet safety and welfare will always be our priority.
                  When you apply for a pet, we carry out a home check. This helps us to see if you’re a good match for the pet you want to adopt. We use the results of the home check to make recommendations to the rehomer. The rehomer will decide if you’re the right person to adopt their pet.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ flexShrink: 0 }}>I'm having trouble uploading photos from my iPhone. Why is this happening?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Some people using iPhones to take photos will be saving their photos as HEIC files. Pet Adoption, like many other platforms, can only accept .jpg .jpeg or .png files.
                  <br />
                  To change your camera settings on your iPhone so that photos are saved as .JPEG's you will need to do the following:
                  <br />
                  In your "Settings" menu, find and tap on "Camera". In the "Camera" menu, tap on "Formats" at the very top of the menu. Here you can select either
                  <br /> "High Efficiency" which will allow your iPhone to shoot and store HEIC files, or "Most Compatible", which will have your phone capture JPEG's. </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header">
                <Typography sx={{ flexShrink: 0 }}>
                  Does Pet Adoption verify the pet's health record before listing?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>No, we ask the pet's owner to be honest about any health issues or concerns they may have (or have had) and include the information in the listing.
                  We strongly advise that prior to confirming any adoption (and after reserving the pet) you ask the rehomer to show you any relevant documentation about the pet including any vet records.  You can also ask the rehomer to give you the vet's telephone number so that you can make your own enquiries if you wish to do so.
                  If you don't do this, you cannot go back to the rehomer after you have accepted and adopted the pet.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header">
                <Typography sx={{ flexShrink: 0 }}>
                  Will you carry out a home check?          </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. Home checks are a really important part of the process. They’re a great way of making sure that you and your potential new pet are a good match.
                  We work with animal-loving volunteers to carry out our home checks. They will assess your living environment to make sure it’s right for the pet you want to adopt. This also helps reassure you that the pet you’re interested in will suit your home and lifestyle.
                  The home checker may also ask to take photos.
                  The home checker will either visit your house or carry out the check remotely if you're adopting a dog or cat. Home checks for rabbits are always carried out remotely.
                  We use the results of the home check to make recommendations to the rehomer. The rehomer will then decide if you’re the right person to adopt their pet. </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7bh-content"
                id="panel7bh-header">
                <Typography sx={{ flexShrink: 0 }}>
                  Why do I have to pay an adoption fee before I get the pet?          </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We want people to adopt pets responsibly. By paying the fee at this point in the process, you're demonstrating to the rehomer that you are very serious about adopting their pet.
                  We know from our research that it can be very frustrating if you are one of many people trying to adopt the same pet. Your payment stops any further applications from being made, and the pet is reserved for you. Assuming all is well with the home check, you can then meet the pet and proceed with the adoption.
                  We will hold the fee safely and securely in an account which will be fully refunded to you if you don't end up adopting the pet.
                  By paying the fee to us at this stage, it will also deter scammers from using the website.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel8bh-content"
                id="panel8bh-header">
                <Typography sx={{ flexShrink: 0 }}>
                  I've paid my adoption fee but now I have met the pet and I'm not sure they are right for me. What should I do?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We strongly suggest that you are completely confident in your decision to adopt this pet before you take them home, and if you have any doubts,
                  it is better not to go ahead with the adoption and contact the Pet Adoption team to let us know. If you don't end up adopting the pet we will refund your adoption fee.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel9bh-content"
                id="panel9bh-header">
                <Typography sx={{ flexShrink: 0 }}>
                  How does Pet Adoption deal with scammers or pet sellers?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The Pet Adoption team monitors the messaging and profiles on our website. Anyone flagged as a potential scammer or pet seller is suspended and removed from our website. For safety reasons we strongly advise not to participate in any messaging or meeting up outside of the site.
                  Pet Adoption is strictly for rehoming pets responsibly, and will never be for the sale of pets.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel10bh-content"
                id="panel10bh-header">
                <Typography sx={{ flexShrink: 0 }}>
                  What do i need to know about dog microchipping?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>A microchip is a small electronic device about the size of a grain of rice. The microchip is inserted under your dog’s skin, between their shoulder blades, via a quick injection. Once inserted, a dog cannot feel the microchip and the special capsule around it means that it does not break down and is designed to last your pet’s lifetime.
                  The microchip is coded with a unique number that can be read by a scanner. Microchips do not store personal data – this is kept against the unique identification number on a secure database. If your dog is found and scanned, the microchip database is accessed online and the organisation that has your dog, for example a veterinary surgery, a rescue centre or the police, can use the number to find your details. You can then be contacted and your pet safely reunited with you. If you have adopted a dog, you'll need to update the microchip details.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel11bh-content"
                id="panel11bh-header">
                <Typography sx={{ flexShrink: 0 }} >
                  What do i need to know about cat microchipping?       </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>A microchip is a small device about the size of a grain of rice. The microchip is inserted under your cat’s skin, between their shoulder blades, via a quick injection. Once inserted, a cat cannot feel the microchip and the special capsule around it means that it does not break down and is designed to last your pet’s lifetime.
                  The microchip is coded with a unique number that can be read by a scanner. Microchips do not store personal data – this is kept against the unique identification number on a secure database. If your cat is found and scanned, the microchip database is accessed online and the organisation that has your cat, for example the veterinary surgery, a rescue centre or the police, can use the number to find your details. You can then be contacted and your pet safely reunited with you.
                  Any time your personal contact details change, including details such as your mobile phone number, you must update the microchip company with your new details. Changing your details at your vet will not change your microchip details, as these are held by a separate company.
                  This is the same if you adoption an animal which is already microchipped. The physical chip does not have to be touched, but the unique 15-digit number needs to be assigned to your details rather than that of a previous owner.
                  It is your responsibility to contact your microchip company to change details, but your vet can help you if you have lost your pet’s microchip number or are not sure which company your pet’s microchip is registered with.
                  <br />How to update: <br />
                  Determine the manufacturer of your pet's microchip. This should be on any microchip paperwork you hold.
                  Determine which database holds your contact details. From your cat's microchip paperwork, or from the microchip company's website, find out which database your pet's microchip is registered on. Each microchip manufacturer contracts with a specific database. NOTE: If you do not know either the database or the manufacturer, these can be determined by the chip number prefix (the first part of your cat's microchip number) which is each unique to a certain database. If you also do not know your pet's microchip number, contact your vet to see if they have this information stored, or arrange to have your pet brought in to be scanned so you can get the number. Fill out the change of details form. Each database will have a form you can fill out which will allow you to change your details. This may incur a small cost.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel12bh-content"
                id="panel12bh-header">
                <Typography sx={{ flexShrink: 0 }}>
                  Should I microchipping my rabbit?       </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Rabbits, both outdoor and indoor, are at risk of getting lost and escaping. As they don't wear collars, a microchip is the only way to positively identify your rabbit – this means having your rabbit microchipped significantly increases the chances of your lost rabbit being reunited with you. This can save a lot of heartbreak, and is of course much better for your rabbit too!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default FaQ;
