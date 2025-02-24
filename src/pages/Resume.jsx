import Paper from "@mui/material/Paper";
import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";

function Resume() {
  return (
    <main>
      <Paper elevation={3} className='paper'>
        <Container maxWidth='sm' sx={{ textAlign: "center", py: 3 }}>
          <Typography variant='h4'>Alvaro Flores Suarez</Typography>
          <Typography variant='body1'>New York, New York 10025</Typography>
          <Typography variant='body1'>
            <a href='mailto:floressuarezalvaro@gmail.com'>
              floressuarezalvaro@gmail.com
            </a>{" "}
            | (503) 521-6905
          </Typography>
          <Typography variant='body1'>
            <a
              href='https://linkedin.com/in/afloressuarez'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href='https://github.com/floressuarezalvaro'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </Typography>
        </Container>

        <Box mt={1}>
          <Typography variant='h5'>Professional Experience</Typography>
          <Box sx={{ ml: 3 }}>
            <Typography variant='h6'>Marqeta, Oakland, CA</Typography>
            <Box
              sx={{
                "& .role": { fontStyle: "italic", lineHeight: 1, mb: 0.4 },
              }}
            >
              <Typography variant='subtitle1' className='role'>
                Senior Staff Integration Engineer | February 2025 - Present
              </Typography>
              <Typography variant='subtitle1' className='role'>
                Staff Integration Engineer | August 2022 - February 2025
              </Typography>
              <Typography variant='subtitle1' className='role'>
                Senior Integration Engineer | December 2021 - August 2022
              </Typography>
              <Typography variant='subtitle1' className='role'>
                Technical Implementation Specialist | September 2020 - December
                2021
              </Typography>
            </Box>

            <Typography variant='body2' mt={2}>
              • Led the technical role in operationalizing, streamlining,
              documenting, and successfully transitioning five beta products to
              the technical delivery team.
              <br />
              • Led the technical role in operationalizing, streamlining,
              documenting, and transitioning five beta products.
              <br />
              • Designed Salesforce dashboards to track trends and support
              data-driven decision-making.
              <br />
              • Managed a team handling customer expansion deals and technical
              integrations.
              <br />• Drove strategy and execution for customer expansion
              initiatives.
            </Typography>

            <Typography variant='h6' mt={2}>
              NexTravel, San Francisco, CA
            </Typography>

            <Box
              sx={{
                "& .role": { fontStyle: "italic", lineHeight: 1, mb: 0.4 },
              }}
            >
              <Typography variant='subtitle1' className='role'>
                Account Manager | November 2019 - June 2020
              </Typography>
              <Typography variant='subtitle1' className='role'>
                Onboarding Specialist | February 2019 - November 2019
              </Typography>
            </Box>

            <Typography variant='body2' mt={2}>
              • Managed travel platform adoption and provided high-level
              technical support.
              <br />
              • Helped customers navigate Covid-19 travel challenges while
              maintaining a 91% CSAT score.
              <br />
              • Assisted the product team with data analysis for MVP feature
              decisions.
              <br />• Worked cross-functionally with engineering, product, and
              design teams.
            </Typography>
          </Box>
        </Box>

        <Box mt={3}>
          <Typography variant='h5'>Projects</Typography>
          <Box sx={{ ml: 3 }}>
            <Typography variant='body2'>
              Green-2-You.com | May 2024 - December 2024 <br />• Automated
              Billing System for Small Business Owners – Developed a web
              application using JavaScript, Node.js, React, and MongoDB to
              automate billing processes, enabling automatic generation and
              emailing of PDF invoices.
            </Typography>
          </Box>
        </Box>

        <Box mt={3}>
          <Typography variant='h5'>Education</Typography>
          <Box sx={{ ml: 3 }}>
            <Typography variant='body2'>
              • University of California, Berkeley - Full Stack Web Development
              Developer Certificate, March 2021
            </Typography>
            <Typography variant='body2'>
              • Santa Clara University, College of Arts & Sciences - Public
              Health & Science Major, March 2017
            </Typography>
          </Box>
        </Box>

        <Box mt={3}>
          <Typography variant='h5'>Skills</Typography>
          <Box sx={{ ml: 3 }}>
            <Typography variant='body2'>
              • Highly experienced in JavaScript, React, HTML, APIs, Node.js,
              SQL, and NoSQL.
              <br />• Experienced with Python, Salesforce, AWS, Jira, and
              Zendesk.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant='contained'
            href='/floresSuarezResume.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            Download PDF
          </Button>
        </Box>
      </Paper>
    </main>
  );
}

export default Resume;
