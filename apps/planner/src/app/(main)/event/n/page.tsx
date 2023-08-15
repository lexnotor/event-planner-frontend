import AddService from "@/components/event/AddService";
import ListeServices from "@/components/event/ListeServices";
import NewEventForm from "@/components/event/NewEventForm";
import NewEventContext from "@/components/event/context/NewEventContext";

const Page = () => {
    return (
        <div className="p-4">
            <NewEventContext>
                <h3 className="font-bold">Détails de l'evenement</h3>
                <div className="border border-blue-600/0 rounded-lg p-4">
                    <NewEventForm />
                </div>

                <h3 className="font-bold">Services</h3>
                <div className="border border-blue-600/0 rounded-lg p-4">
                    <ListeServices />
                    <AddService />
                </div>
            </NewEventContext>
        </div>
    );
};

export default Page;
