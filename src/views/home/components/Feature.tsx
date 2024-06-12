/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link/Link'
import walletPng from '../../../assets/images/home/wallet.png';
import messengerPng from '../../../assets/images/home/messenger.png';
import votingPng from '../../../assets/images/home/voting.png';
import betaWalletPng from '../../../assets/images/home/betawallet.png';

const items = [
    {
        icon: <EdgesensorHighRoundedIcon />,
        title: 'Wallet, Swap and Liquidity ',
        description:
            "Send and received directly from your wallet. Swap and Liquidity. Check transaction on ICP blockchain",
        image: walletPng,
    },
    {
        icon: <ViewQuiltRoundedIcon />,
        title: 'Chat2Locate',
        description:
            'Connect directly with our waste collection team within the app. Chat2Locate allows you to easily discuss your specific needs, preferred pick-up times, and any additional details.',
        image: messengerPng
    },
    {
        icon: <DevicesRoundedIcon />,
        title: 'Voting & NFT integration',
        description:
            'Earn unique NFTs representing your waste reduction efforts and DAO voting empowers users to shape the platform direction.',
        image: votingPng
    },
];

export default function Features() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index: number) => {
        setSelectedItemIndex(index);
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography component="h1" variant="h1" color="text.primary">
                            dApp Features
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: { xs: 2, sm: 4 } }}
                        >
                            Empower yourself with decentralized technology. Join the Waste2Earn Revolution in transforming waste into real assets.
                        </Typography>
                    </div>
                    <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
                        {items.map(({ title }, index) => (
                            <Chip
                                key={index}
                                label={title}
                                onClick={() => handleItemClick(index)}

                            />
                        ))}
                    </Grid>
                    <Box
                        component={Card}
                        variant="outlined"
                        sx={{
                            display: { xs: 'auto', sm: 'none' },
                            mt: 4,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${selectedFeature.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                minHeight: 438,
                            }}
                        />
                        <Box sx={{ px: 2, pb: 2 }}>
                            <Typography color="text.primary" variant="body2" fontWeight="bold">
                                {selectedFeature.title}
                            </Typography>
                            <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                                {selectedFeature.description}
                            </Typography>
                            <Link
                                color="primary"
                                variant="body2"
                                fontWeight="bold"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    '& > svg': { transition: '0.2s' },
                                    '&:hover > svg': { transform: 'translateX(2px)' },
                                }}
                            >
                                <span>Learn more</span>
                                <ChevronRightRoundedIcon
                                    fontSize="small"
                                    sx={{ mt: '1px', ml: '2px' }}
                                />
                            </Link>
                        </Box>
                    </Box>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                        useFlexGap
                        sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
                    >
                        {items.map(({ icon, title, description }, index) => (
                            <Card
                                key={index}
                                variant="outlined"
                                component={Button}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    p: 3,
                                    height: 'fit-content',
                                    width: '100%',
                                    background: 'none',
                                    backgroundColor:
                                        selectedItemIndex === index ? 'action.selected' : undefined,
                                    borderColor: 'text.secondary',
                                    color: 'text.primary',
                                    transition: 'ease-in-out'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        textAlign: 'left',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        alignItems: { md: 'center' },
                                        gap: 2.5,
                                    }}
                                >
                                    <Box>{icon}</Box>

                                    <Box sx={{ textTransform: 'none' }}>
                                        <Typography
                                            color="text.primary"
                                            variant="body2"
                                            fontWeight="bold"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{ my: 0.5 }}
                                        >
                                            {description}
                                        </Typography>
                                        <Link
                                            color="primary"
                                            variant="body2"
                                            fontWeight="bold"
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                '& > svg': { transition: '0.2s' },
                                                '&:hover > svg': { transform: 'translateX(2px)' },
                                            }}

                                        >
                                            <span>Learn more</span>
                                            <ChevronRightRoundedIcon
                                                fontSize="small"
                                                sx={{ mt: '1px', ml: '2px' }}
                                            />
                                        </Link>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: { xs: 'none', sm: 'flex' },
                            backgroundImage: `url(${selectedFeature.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />

                </Grid>
                <Grid container justifyContent="center" sx={{ mt: 5 }} >
                    <Link
                        href="https://mqvnf-sqaaa-aaaap-ahhpa-cai.icp0.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            py: 1.5,
                            px: 4,
                            borderRadius: 2,
                            minWidth: '318px',
                            minHeight: '122px',
                            backgroundImage: `url(${betaWalletPng})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}