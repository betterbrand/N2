import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    StackDivider,
    useColorMode,
    VStack,
  } from "@chakra-ui/react";
  import { WalletStatus } from "@cosmos-kit/core";
  import { useChain } from "@cosmos-kit/react";
  import { useState } from "react";
  import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
  import { FaUserCircle } from "react-icons/fa";
  import { IoWalletOutline } from "react-icons/io5";
  
  import { ChainWalletCard } from ".";
  
  const chainNames_1 = ["thorchain"];
  const chainNames_2 = ["thorchain"];
  
  export const WalletButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { username, connect, disconnect, wallet } = useChain(chainNames_1[0]);
    const [globalStatus, setGlobalStatus] = useState<WalletStatus>(
      WalletStatus.Disconnected
    );
  
    const getGlobalButton = () => {
      if (globalStatus === "Connecting") {
        return (
          <Button
            isLoading
            loadingText={`Connecting ${wallet?.prettyName}`}
            colorScheme="teal"
            size="md"
            marginTop={6}
            marginBottom={2}
            textColor="white"
          />
        );
      }
      
      if (globalStatus === "Connected") {
        return (
          <ButtonGroup
            size="md"
            isAttached
            variant="solid"
            marginTop={6}
            marginBottom={2}
          >
            <Button
              leftIcon={<IoWalletOutline />}
              isActive={true}
              variant="outline"
            >
              {wallet?.prettyName}
            </Button>
            <Button leftIcon={<FaUserCircle />} isActive={true} variant="outline">
              {username}
            </Button>
            <Button
              color="white"
              onClick={async () => {
                await disconnect();
                setGlobalStatus(WalletStatus.Disconnected);
              }}
            >
              Disconnect
            </Button>
          </ButtonGroup>
        );
      }
  
      return (
        <Button
          isLoading={false}
          loadingText={`Connecting ${wallet?.prettyName}`}
          size="md"
          marginTop={6}
          marginBottom={2}
          onClick={() => connect()}
          className="text-white"
          colorScheme='yellow' color='white'
        >
          Connect Wallet
        </Button>
      );

    };
  
    return (
      <SimpleGrid columns={1} spacing={10} maxW={"60%"} marginX="auto">
        <Flex justifyContent="end">
          <Button variant="outline" px={0} onClick={toggleColorMode}>
            <Icon
              as={colorMode === "light" ? BsFillMoonStarsFill : BsFillSunFill}
            />
          </Button>
        </Flex>
        <VStack spacing="24px" marginTop={-2}>
          <Heading size="lg" marginBottom={3}>
           Network Nation
          </Heading>
          {getGlobalButton()}
        </VStack>
       
      </SimpleGrid>
    );

  };