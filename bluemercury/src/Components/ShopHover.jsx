import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Flex,
} from "@chakra-ui/react"

import styles from "../Styles/Shop.module.css"


export default function ShopHover() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                fontSize="15"
                variant="ghost"
                color="black"
                mx={1}
                py={[1, 2, 2]}
                px={2}
                _hover={{ color:"black" , borderBottom: "2px solid black",paddingBottom: "3px" , fontWeight:"500"}}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                SHOP
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="-5px">
                <div className={styles.BrandMainBox}>
            <div className={styles.BrandBox}>
               
              <Flex className={styles.BrandFirstBox} direction="column">
                <a href="/" style={{fontWeight:"500"}}>SKIN CARE</a>
                <a href="/" className={styles.BrandSecPara}>MAKEUP</a>
                <a href="/" className={styles.BrandSecPara}>HAIR</a>

              </Flex>

<Flex width={"500px"} justifyContent="space-between" p="0px 20px">

              <Flex direction="column" className={styles.BrandSecBox}>
                <a href="/" style={{fontWeight:"500"}}>BY CATEGORY</a>
                <a href="/" className={styles.BrandSecPara}>Shop All</a>
                <a href="/" className={styles.BrandSecPara}>Cleansers</a>
              </Flex>

            
              </Flex>

              <div style={{textAlign:"left"}}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/powerglow_peel_trial_1_303x303.jpg?v=1659552611" alt="" />
                <a href="/" style={{fontWeight:"500"}}>Best Seller: M-61 PowerGlow® Peel</a>
                <a href="/" style={{fontSize:"14px", color:"gray"}}>Receive a free packette with all purchases while supplies last!</a>
              </div>


               </div>
               </div>
            </MenuList>
        </Menu>
    )
}