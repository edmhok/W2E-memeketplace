import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SettingsSuggestSharpIcon from '@mui/icons-material/SettingsSuggestSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import RocketLaunchSharpIcon from '@mui/icons-material/RocketLaunchSharp';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';

export default function Roadmap() {
    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 4, sm: 3 },
                    pb: { xs: 3, sm: 2 },
                }}
            >
                <Stack spacing={3} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            fontSize: 'clamp(3rem, 10vw, 4rem)',
                            textAlign: 'center',
                            alignSelf: 'center',
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                        }}
                    >
                        Our&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                                color: '#a62feb'
                            }}
                        >
                            RoadMap
                        </Typography>
                    </Typography>
                </Stack>

            </Container>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        Phase 1
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <HomeSharpIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span" color="secondary">
                            Foundation and Prototyping
                        </Typography>
                        <Typography>
                            Token under ICRC2 Development, <br />
                            Wallet Integration, <br />
                            betaWallet v1, <br />
                            Swap and Liquidity, <br />
                            Proposal System Outline
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        Phase 2
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <SettingsSuggestSharpIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span" color="secondary">
                            Cross-Chain Expansion and IoT Exploration
                        </Typography>
                        <Typography>
                            EXT Token Development, <br />
                            Smart Weight Integration , <br />
                            Chatbox Integration, <br />
                            NFT & Voting System
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        Phase 3
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <PeopleSharpIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span" color="secondary">
                            Community Engagement and DAO Implementation
                        </Typography>
                        <Typography>
                            Outreach, <br />
                            Partnership Building, <br />
                            DAO Implementation, <br />
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        Phase 4
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <RocketLaunchSharpIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span" color="secondary">
                            Scaling and Refinement
                        </Typography>
                        <Typography>
                            Iterative Development, <br />
                            Crosschain Functionality , <br />
                            Expanding Partnership
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}
