import BackButton from "@/components/BackButton";
import AddService from "@/components/event/AddService";
import ListeServices from "@/components/event/ListeServices";
import NewEventForm from "@/components/event/NewEventForm";
import SubmitNewEvent from "@/components/event/SubmitNewEvent";
import NewEventContext from "@/components/event/context/NewEventContext";
import StoreProvider from "@/redux/StoreProvider";

const Page = () => {
    return (
        <div className="p-4">
            <h1 className="flex justify-between mb-4">
                <span className="text-2xl">Ajouter un évenement</span>
                <BackButton />
            </h1>
            <NewEventContext>
                <h3 className="font-bold">Détails de l'evenement</h3>
                <div className=" rounded-lg p-4">
                    <NewEventForm />
                </div>

                <h3 className="font-bold">Services</h3>
                <div className="border border-blue-600/0 rounded-lg p-4">
                    <ListeServices />
                    <AddService />
                </div>
                <div className="text-right rounded-lg p-4 sticky bottom-0 backdrop-blur-lg">
                    <hr className="border-primary-700 my-2" />
                    <StoreProvider>
                        <SubmitNewEvent />
                    </StoreProvider>
                </div>
            </NewEventContext>
        </div>
    );
};

export default Page;
