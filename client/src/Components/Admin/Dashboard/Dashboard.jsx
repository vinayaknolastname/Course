import { Grid, Box, Text, Heading, Stack, HStack, Progress } from '@chakra-ui/react';
import React from 'react';
import {
  RiArrowDownLine,
  RiArrowUpCircleFill,
  RiArrowUpLine,
} from 'react-icons/ri';
import Sidebar from '../SIdebar';
import { DoughnutChart, LineChart } from './Chart';



const Databox = ({ views, titleQTY, qtyPercentage, profit }) => (
  <Box
    width={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107, 70, 193 , 0.5)'}
    padding="8"
    borderRadius={'lg'}
  >
    <Text children={titleQTY} />

    <HStack>
      <Text children={views} fontWeight="bold" fontSize={'xl'} />
      <Text children={`${qtyPercentage}%`} />
      {profit ? (
        <RiArrowUpLine color="green" />
      ) : (
        <RiArrowDownLine color="red" />
      )}
    </HStack>
    <Text children={'Since Last Month'} opacity="0.5" />
  </Box>
);





const Bar = ({ title, value }) => (

  <Box py={'4'} px={['0', '20']} >
    <Heading size={'sm'} children={title} mb='2' />
    <HStack w={'full'} alignItems={'center'}   >
      <Text children= { `${value}%`} />
      <Progress w={'full'} value={ value < 0 ? 0 : value } />
      <Text children='100%' />
    </HStack>
  </Box>

);














const Dashboard = () => {
  return (
    <Grid
      css={{
        cursor: `url(),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box boxSizing="border-box" py={16} px={['4', '8']}>
        <Text
          textAlign={'center'}
          opacity={'0.5'}
          children={`Last Change was on ${String(new Date()).split('G')[0]} `}
        />

        <Heading
          children={'Dashboard'}
          marginLeft={['0', '16']}
          marginBottom="16"
          textAlign={['center', 'left']}
        />
        <Stack
          direction={['column', 'row']}
          minH="24"
          justifyContent={'space-evenly'}
        >
          <Databox
            titleQTY="Views:"
            qtyPercentage={80}
            profit={false}
            views={123}
          />
          <Databox
            titleQTY="Users:"
            qtyPercentage={123}
            profit={true}
            views={55}
          />
          <Databox
            titleQTY="Subscriptions:"
            qtyPercentage={64}
            profit={false}
            views={85}
          />
        </Stack>

        <Box
          margin={['0', '16']}
          borderRadius="lg"
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107, 70, 193 , 0.5)'}
        >
          <Heading
            textAlign={['center', 'left']}
            size="md"
            children="Views Graph"
            pt={['8', '0']}
            ml={['0', '16']}
          />

         <LineChart />
        </Box>
        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p={'4'}>
            <Heading
              textAlign={['center', 'left']}
              size="md"
              ml={['0', '16']}
              my="8"
              children="Progress Bar"
            />

            <Box>
              <Bar title='Views' value={30} />
                <Bar title='Users' value={78} />
                  <Bar title='Subscriptions' value={-20} />

                  </Box>
                </Box>
                <Box p={['0','16']} boxSizing='border-box' py='4'>
                <Heading  textAlign={'center'}  size='md' mb='4' children='Users' />
                <DoughnutChart />

                </Box>


              </Grid>
            </Box>
            <Sidebar />
        </Grid>
        );
};

        export default Dashboard;
