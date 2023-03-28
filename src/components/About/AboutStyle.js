import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledAbout = styled(motion.div)`
   height: 90vh;
   // padding: 5rem 10rem;
   // color: white;
   // display: flex;
   // align-items: center;
   // justify-content: space-between;


   @media (max-width: 768px) {
      text-align: center;

      h2 span {
         font-size: 30px;
      }
   }
`;


export const StyledDescription = styled.div`
   .img-profile {
      width: 20rem;
      height: 20rem;
      object-fit: cover;
      border-radius: 50%;
      -webkit-box-shadow: 10px 14px 44px -8px rgba(0,0,0,0.64);
      -moz-box-shadow: 10px 14px 44px -8px rgba(0,0,0,0.64);
      box-shadow: 10px 14px 44px -8px rgba(0,0,0,0.64);
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
   }


   @media (max-width: 768px) {
      .img-profile {
         top: 38%;
         left: 50%;
         transform: translate(-50%, -50%);
      }
   }
`;

export const StyledImg = styled.div`
   img {
      width: 100%;
      height: 40vh;
      object-fit: cover;
      object-position: 100% 0;
   }
   @media (max-width: 768px) {
      img {
         width: 100%;
         height: 30vh;
         object-fit: cover;
         object-position: 0;
      }
   }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;