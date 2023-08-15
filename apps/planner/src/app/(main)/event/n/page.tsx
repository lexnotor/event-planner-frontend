import AddService from "@/components/event/AddService";
import ListeServices from "@/components/event/ListeServices";
import NewEventForm from "@/components/event/NewEventForm";
import SubmitNewEvent from "@/components/event/SubmitNewEvent";
import NewEventContext from "@/components/event/context/NewEventContext";

const Page = () => {
    return (
        <div className="p-4">
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
                    <SubmitNewEvent />
                </div>
            </NewEventContext>
        </div>
    );
};

export default Page;
