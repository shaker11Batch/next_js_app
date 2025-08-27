

import Banner from "@/components/Banner";
import Subscription from "@/components/Subscription";

import Products from "./products/page";




export default function Home() {
  return (
    <>
      <Banner/>
      <Products></Products>
      <Subscription />
      
    </>
  );
}
