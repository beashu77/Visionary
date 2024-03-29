import React from 'react'
import { Text,Flex,Button ,Box,Stack,Image} from '@chakra-ui/react'
import { EditIcon} from '@chakra-ui/icons'



const Account_overview = () => {
  return (
<Flex direction={"column"} textAlign="left"  w="70%" gap="20px" mt={["25px", "25px" ,"0px" ]} >
<Text fontSize='md' >My Account > Account Overview</Text>
<Text fontSize='3xl' mt="-20px" fontWeight={"100"} >ACCOUNT OVERVIEW</Text>
<Flex textAlign={["start","start","center"]} direction={["column", "column" ,"row" ]} >
<Text fontSize='20px' fontWeight={"100"} mr="10px">MY BLUEREWARDS</Text>
<a href="" style={{"borderBottom":"1px solid rgb(119,139,171)","color":"rgb(139,150,167)","fontSize":"12px"}}>View Loyalty Program Details</a>
</Flex>

<Flex bg="#F8F8F8" border={"1px solid rgb(139,150,167)"} direction="column" alignItems={"flex-start"} p="15px 25px" >
   <Text color="rgb(139,150,167)" mb="15px">Earn $10 for every $250 you spend, plus free birthday gifts & treatments</Text>
   <Button bg="rgb(18,40,76)" color={"white"} borderRadius="0" p="5px 30px" >JOIN NOW</Button>
</Flex>

<Flex alignItems={"flex-start"} textAlign={["start","start","center"]} direction={["column", "column" ,"row" ]}>
<Text fontSize='20px' mr="10px"  fontWeight={"100"} >MY PURCHASES</Text>
<a href="" style={{"borderBottom":"1px solid rgb(119,139,171)","paddingBottom":"-5px","color":"rgb(139,150,167)","fontSize":"12px"}}>View Order History Details</a>
</Flex>
<Flex  color="rgb(139,150,167)" border={"1px solid rgb(139,150,167)"} direction="column" alignItems={"flex-start"} p="15px 25px">You have not placed any orders</Flex>


<Flex alignItems={"flex-start"}>
<Text fontSize='20px'   fontWeight={"100"} mr="10px">MY WISHLIST</Text>
<a href=""  style={{"borderBottom":"1px solid rgb(119,139,171)","paddingBottom":"-5px","color":"rgb(139,150,167)","fontSize":"12px"}} >View Wishlist</a>
</Flex>
<Flex border={"1px solid rgb(139,150,167)"} direction="column" alignItems={"flex-start"} p="15px 25px">
<Image src='https://i.ibb.co/GscC64R/image-1-8.png' h="500px" w="550px" alt='Dan Abramov' />
</Flex>


<Flex alignItems={"flex-start"} textAlign={["start","start","center"]} direction={["column", "column" ,"row" ]} >
<Text fontSize='20px'  fontWeight={"100"}  mr="10px">MY ACCOUNT INFORMATION</Text>
<a href=""  style={{"borderBottom":"1px solid rgb(119,139,171)","paddingBottom":"-5px","color":"rgb(139,150,167)","fontSize":"12px"}}>View Account Information Details</a>
</Flex>

<Stack direction={"row"}border={"1px solid rgb(139,150,167)"} justifyContent="space-between" p="15px 25px" display={["none","none","flex"]}>
   
<Box w="30%">
    <Text mb="10px" fontWeight={"100"} >DEFAULT SHIPPING ADDRESS</Text>
    <Flex  color="rgb(139,150,167)" w="100%" justifyContent={"space-between"} alignItems="center">
        YOGESH BHOSKAR
        <EditIcon/>  
                  </Flex>
            </Box>
<Box w="30%">
    <Text mb="10px" fontWeight={"100"} >EMAIL</Text>
    <Flex  color="rgb(139,150,167)" w="100%" justifyContent={"space-between"} alignItems="center">
        yogesh.bhoskar2512@gmail.com
        <EditIcon/>  
                  </Flex>
            </Box>
<Box w="25%">
    <Text mb="10px" fontWeight={"100"} >PHONE NUMBER</Text>
    <Flex  color="rgb(139,150,167)" w="100%" justifyContent={"space-between"} alignItems="center">
      8805707392
        <EditIcon/>  
                  </Flex>
            </Box>

</Stack>
<Text  color="rgb(139,150,167)">By continuing, you agree to Bluemercury's Privacy Practices.</Text>
    </Flex>        
  )
}

export default Account_overview