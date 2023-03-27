import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, VStack, Text, Heading, HStack, Image } from '@chakra-ui/react'
import women from "../assets/women.jpg"
import React from 'react'


function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

const WomenHealth = () => {
  return (
    <VStack spacing={8}>
      <Heading m={'10'}>Women Health</Heading>
      <Box m={'15'} width={'900px'} >
        <VStack>
          <Image src={women} h={['40', '400']} />
        </VStack>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  IEC Material on Women's Health
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={'justify'} top={'30px'}>
              <p>
                <ul>
                  <li><a href="http://www.ihbp.org/Adolescent-Health">Menstrual Hygiene Campaign</a></li>
                  <li><a href="http://www.ihbp.org/content/maternal-health-campaign">Maternal Health Campaign</a></li>
                  <li><a href="http://www.ihbp.org/content/freedays-menstrual-hygiene-tv-spot-60-sec">'Freedays' Menstrual Hygiene TV Spot (60 Sec)</a></li>
                  <li><a href="http://www.ihbp.org/node/193">Family Planning and Reproductive Health </a></li>
                </ul>
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Methods of birth control:
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text justifyContent={'justify'}>
                <p align="justify">
                  Continuous abstinence

                  This means not having sex (vaginal, anal, or oral) at any time. It is the only sure way to prevent pregnancy and protect against sexually transmitted infections (STIs), including HIV.

                  Barrier method:

                  Female condom

                  This condom is worn by the woman inside her vagina. It keeps sperm from getting into her body. It is made of thin, flexible, manmade rubber and is packaged with a lubricant. It can be inserted up to 8 hours before having sex. One should use a new condom each time they have intercourse. One should not use both female and a male condom at the same time.

                  Male condom

                  Male condoms are a thin sheath placed over an erect penis to keep sperm from entering a woman's body. Condoms can be made of latex, polyurethane, or "natural/lambskin". The natural kind do not protect against STIs. Condoms work best when used with a vaginal spermicide, which kills the sperm. And one need to use a new condom with each sex act.

                  Condoms are either:

                  • Lubricated, which can make sexual intercourse more comfortable

                  • Non-lubricated, which can also be used for oral sex. It is best to add lubrication to non-lubricated condoms if you use them for vaginal or anal sex.  Person can buy them at the drug store. Oil-based lubricants like massage oils, baby oil, lotions, or petroleum jelly will weaken the condom, causing it to tear or break.

                  Department of Family Welfare has been procuring condoms with effect from 1994-95. Under the free distribution scheme, condoms under brand name 'Nirodh' are made available to acceptors free of charge through Primary Health Centers and subcenters in rural areas and through hospitals, dispensaries, MCH centers and post-partum

                  Hormonal methods

                  Oral contraceptives — combined pill ("The pill")

                  The pill contains the hormones estrogen and progestin. It is taken daily to keep the ovaries from releasing an egg. The pill also causes changes in the lining of the uterus and the cervical mucus to keep the sperm from joining the egg.

                  Some women prefer the "extended cycle" pills. These have 12 weeks of pills that contain hormones (active) and 1 week of pills that don't contain hormones (inactive). While taking extended cycle pills, women only have their period three to four times a year. Many types of oral contraceptives are available in the market like I pill etc.

                  In addition, the scheme of oral pills was launched in 1987 with the brand name Mala D by government of India.

                  Abortion

                  There are two types of abortion- medical abortion or surgical abortion.

                  Medical abortion is a type of  non-surgical abortion in which drugs are used to induce abortion. An oral preparation for medical abortion is commonly referred as an abortion pill. It is safe and effective. Should be taken after consent of medical professional.

                  Surgical abortion is upto 15 weeks gestation, vacuum aspiration are most common surgical methods of induced abortion.

                  Sterilization

                  The Government issued directions requiring the doctors to obtain written consent of both husband and wife for sterilization of either.  The State Governments have also laid down rules and policy guidelines requiring the doctor to strictly asses the eligibility of the applicant in terms of age, number of living children, martial status and similar other criteria. No person is to be sterilized unless she/he has attained the age of 35 years, is married and the consent of both the partners has been obtained for such operation.</p></Text>

            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Medical tests for Women in 20's and 30's
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={'justify'} top={'30px'}>
              <p>
                <ul>
                  <li>Weighing weight: One should weigh regularly, as too much of it may puts you at high risk for developing a number of diseases later in life.</li>
                  <li>Blood Pressure. It's simple, it's cheap and it's quick.</li>
                  <li>Cholesterol Profile. One should also have a cholesterol test. Everyone age 20 and over should know their cholesterol numbers, and get them checked at least once every five years.</li>
                  <li>For Women Only: Breast Exam, Pelvic Exam and Pap. A clinical breast exam and 10 minutes of mild discomfort from the pelvic exam pays big dividends in protecting from cancer and diseases that can cause infertility. If you've had abnormal Paps in the past, be sure to get a new Pap smear as often as your doctor recommends. For those with no history of an abnormal Pap, a Pap smear can be done every three years, rather than annually.</li>
                </ul>
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Medical tests for Women in 40's
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={'justify'} top={'30px'}>
              <p>
                <ul>
                  <li>Blood sugar: Decades of eating the wrong food (like coffee, hot dogs, fries can get the picture) plus weight gain (often due to hormonal changes) may have overworked the pancreas. At at age 45, be sure to get a fasting blood sugar test, and then again at least once every three years.</li>
                  <li>Breast exam and mammogram: One might be regularly checking breasts at home but still doctor should do an exam annually, but most experts recommend having a mammogram test done after age 40.</li>
                  <li>Blood pressure: Blood pressure may rise with the increasing age that's common. Fortunately, one can lower his/her blood pressure through diet, exercise, and medication.</li>
                  <li>Weighing one's weight: Taking care of weight is another factor as overweight can put one at high risk for developing a number of diseases, including diabetes and heart disease.</li>
                </ul>
              </p>
            </AccordionPanel>
          </AccordionItem>

          
        </Accordion>

      </Box>
      <HStack>
        <Feature
          title='Plan Money'
          desc='The future can be even brighter but a goal without a plan is just a wish'
        />
        <Feature
          title='Save Money'
          desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
        />
        <Feature
          title='Save Money'
          desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
        />
      </HStack>

    </VStack>

  )
}

export default WomenHealth