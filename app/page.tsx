
import Header from "@/components/header";
import Banner from "@/components/home/banner"
import Contacts from "@/components/home/contacts";
import Reviews from "@/components/home/reviews";
import Services from "@/components/home/services";
import Modal from "@/components/modal";
import ServiceModal from "@/components/services/serviceModal";
import banner_styles from "@/styles/main/banner.module.scss"

export default function Home() {
  return (
    <>
      <Banner/>
      <Services/>
      <Reviews/>
      <Contacts/>
      <Modal>
        <ServiceModal></ServiceModal>
      </Modal>
    </>
  );
}
