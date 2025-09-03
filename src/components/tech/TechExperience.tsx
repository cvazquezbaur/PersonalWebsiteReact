import { Accordion, AccordionDetails, AccordionSummary, Paper, Stack, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import { BlurCircularTwoTone, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import theme from "../../theme";

type Experience = {
    company: string;
    jobTitle: string;
    bullets: string[];
};

const experiences: Experience[] = [
    {
        company: "New Mexico Department of Health",
        jobTitle: "Application Developer",
        bullets: [
            'Full stack developer for web applications for the New Mexico Department of Health',
            'Managed vital records databases',
            'Played a key role in the redesign and implementation of NMHealth.org, leveraging React.js and HCLDX to modernize the websites, improve accessibility, and strengthen security protocols.',
            'Full stack development for the New Mexico IBIS team utilizing React.js and ASP.NET Core, participating in the planning, design, and execution phases of the application.',
            'Full stack development on the New Mexico vaccine registration application using Jquery and ASP.NET Core.',
            'Coordinated the design, implementation in React.js, and deployment of a fully ADA compliant design system to be used on all NMDOH applications from that point on.',
            'Managed the deployment of many NMDOH applications and the transition of many others to AWS.'
        ]
    },
    {
        company: 'TD Bank',
        jobTitle: "Android Developer",
        bullets: [
            'As the full stack Android Developer for the US Payments Pod, I implemented process improvements, shipped 5 full features, and became the subject matter expert for all new features company-wide, due to my implementation of Jetpack Compose and MVVM architecture using state-flow.',
            'Spearheaded the development and implementation of a redesigned Digital Wallets Page, integrating Google Pay and PayPal functionality, collaborating with Visa to display merchant usage data, and incorporating a personal finance management feature.',
            'Secured support and resources from 100+ C-Suite and VP-level stakeholders after leading a 3-month proof-of-concept evaluating third-party software for integrating personal finance management within Card Manager, focusing on data storage, security, and scalability across iOS and Android.',
            'Successfully integrated the Zelle SDK and redesigned the Digital Instant Issuance flow within card management, utilizing Jetpack Compose and MVVM architecture to improve application performance and maintainability.',
            'Created a set of core components for an application-wide front end tool kit.',
            'Implemented multi-threading for asynchronous service calls and deployed a new caching system, significantly enhancing application performance and minimizing API interactions.',
            'Developed and implemented improved design handoff and QA testing protocols, significantly reducing testing time and improving efficiency within the SDLC.'
        ]
    },
    {
        company: 'CVB Consulting',
        jobTitle: 'Principal IT Consultant',
        bullets: [
            'Served as the IT Co-Manager for the New Mexico State Senate during the 2021 regular and special legislative sessions and as a general IT Consultant to five different state agencies.',
            'Successfully facilitated the transition of 150+ employees to a predominantly remote workforce during the critical 2021 legislative session by deploying secure laptops with VPN and virtual desktop capabilities, ensuring uninterrupted operations.',
            'Led the implementation of a new financial reporting system for the entire state, including creating an employee classification system, developing a training and certification program, and providing support to certified financial reporters.'
        ]
    }
];

export default function TechExperience() {
    const [expanded, setExpanded] = useState<number | false>(false);

    const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Stack
            direction='column'
            spacing={1.5}
            alignItems='center'
            sx={{ width: '100%', textAlign: 'center', mb: 5, display: 'flex', paddingX: 5 }}
        >
            <Paper elevation={3} square={false} sx={{ p: '15px', backgroundColor: 'transparent', borderRadius: '3px' }} >
                <Typography variant='h6' gutterBottom sx={{ borderBottom: '1px solid', mb: '10px' }}>
                    Experience:
                </Typography>
                {experiences.map((exp, idx) => (
                    <Accordion
                        key={exp.company}
                        expanded={expanded === idx}
                        onChange={handleChange(idx)}
                        sx={{ 
                            alignItems: 'center',
                            mb: 1, 
                            width: '100%', 
                            borderRadius: '3px',
                            '&:hover': {
                                boxShadow: 6,
                            }, 
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls={`panel${idx}-content`}
                            id={`panel${idx}-header`}
                        >
                            <BlurCircularTwoTone fontSize="small" style={{ marginRight: 8, color: theme.palette.primary.contrastText }} />
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                                    {exp.company}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                                    {exp.jobTitle}
                                </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List dense>
                                {exp.bullets.map((bullet, bidx) => (
                                    <ListItem key={bidx} sx={{ pl: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 28 }}>
                                            <span style={{ fontSize: '1.2em', color: 'primary' }}>•</span>
                                        </ListItemIcon>
                                        <ListItemText primary={bullet} />
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Paper>
        </Stack>
    );
}