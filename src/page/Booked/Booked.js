import {
    ButtonGroup,
    Image,
    Divider,
    Button,
    CardBody,
    Heading,
    CardFooter,
    Stack,
    Card,
    Text,
  } from '@chakra-ui/react'

  function Booked(){
    return(
        <Card maxW='sm' display='flex' justifyContent='center' ml={20} mt={20} backgroundColor='blue.300'>
        <CardBody>
          <Image
            src='src/page/Booked/Orthomosaic-Detail-v2.webp'
            alt='Drone'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>DRONE REACHED</Heading>
            <Text>
              The Drone Has been reached choose your prefered controling
            </Text>
            <Text color='green.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Manual Control
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              User Control
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    )
  }
  export default Booked