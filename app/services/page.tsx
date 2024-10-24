"use client"
import Modal from "@/components/modal";
import Banner from "@/components/services/banner";
import ServiceModal from "@/components/services/serviceModal";
import Services from "@/components/services/services";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ProductsPage() {

    return (
        <> 
            <Banner/>
            <Services/>
            <Modal>
                <ServiceModal></ServiceModal>
            </Modal>
        </>
    )
}